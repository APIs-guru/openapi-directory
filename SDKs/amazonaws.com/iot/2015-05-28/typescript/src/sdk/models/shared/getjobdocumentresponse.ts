import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;
}
