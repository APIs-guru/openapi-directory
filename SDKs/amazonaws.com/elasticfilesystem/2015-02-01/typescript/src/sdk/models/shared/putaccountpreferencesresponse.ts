import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIdPreference } from "./resourceidpreference";


export class PutAccountPreferencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceIdPreference" })
  resourceIdPreference?: ResourceIdPreference;
}
