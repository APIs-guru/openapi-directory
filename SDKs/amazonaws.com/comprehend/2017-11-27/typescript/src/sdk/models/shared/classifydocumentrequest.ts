import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClassifyDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=Text" })
  text: string;
}
