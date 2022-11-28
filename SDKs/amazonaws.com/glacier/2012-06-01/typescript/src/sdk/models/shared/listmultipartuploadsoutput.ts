import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadListElement } from "./uploadlistelement";



// ListMultipartUploadsOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListMultipartUploadsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=UploadsList", elemType: UploadListElement })
  uploadsList?: UploadListElement[];
}
