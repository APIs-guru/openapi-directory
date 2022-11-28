import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetectEntitiesV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
