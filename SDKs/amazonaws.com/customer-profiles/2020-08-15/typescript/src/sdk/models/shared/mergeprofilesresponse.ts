import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MergeProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
