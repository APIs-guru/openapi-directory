import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
