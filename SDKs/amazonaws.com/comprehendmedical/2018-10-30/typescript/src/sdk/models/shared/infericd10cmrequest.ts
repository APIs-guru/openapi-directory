import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InferIcd10CmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
