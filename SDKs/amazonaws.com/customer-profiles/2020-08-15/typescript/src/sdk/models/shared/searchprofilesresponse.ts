import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Profile } from "./profile";



export class SearchProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: Profile })
  items?: Profile[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
