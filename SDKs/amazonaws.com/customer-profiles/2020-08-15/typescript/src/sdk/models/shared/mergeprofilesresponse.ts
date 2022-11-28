import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
