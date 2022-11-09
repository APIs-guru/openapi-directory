import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UploadMetadata
/** 
 * Fields to be used while uploading the attachment.
**/
export class UploadMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=HeadersToInclude" })
  headersToInclude?: Map<string, string>;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=UrlExpiry" })
  urlExpiry?: string;
}
