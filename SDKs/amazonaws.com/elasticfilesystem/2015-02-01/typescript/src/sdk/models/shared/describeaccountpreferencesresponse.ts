import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIdPreference } from "./resourceidpreference";


export class DescribeAccountPreferencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceIdPreference" })
  resourceIdPreference?: ResourceIdPreference;
}
