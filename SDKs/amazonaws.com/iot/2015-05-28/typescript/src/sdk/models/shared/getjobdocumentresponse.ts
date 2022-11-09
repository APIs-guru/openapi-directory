import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: string;
}
