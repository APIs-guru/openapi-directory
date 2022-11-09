import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Profile } from "./profile";


export class SearchProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.Profile })
  items?: Profile[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
