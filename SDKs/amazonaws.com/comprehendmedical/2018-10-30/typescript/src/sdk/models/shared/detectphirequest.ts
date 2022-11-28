import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetectPhiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
