import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UploadListElement } from "./uploadlistelement";


// ListMultipartUploadsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListMultipartUploadsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=UploadsList", elemType: shared.UploadListElement })
  uploadsList?: UploadListElement[];
}
