import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClassifyDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
