import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetectEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
