import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InferRxNormRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
