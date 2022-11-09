import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InferRxNormRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text: string;
}
