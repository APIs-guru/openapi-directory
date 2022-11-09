import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InferIcd10CmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text: string;
}
