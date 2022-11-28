import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentServiceWarning } from "./documentservicewarning";



// UploadDocumentsResponse
/** 
 * Contains the response to an <code>UploadDocuments</code> request.
**/
export class UploadDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adds" })
  adds?: number;

  @SpeakeasyMetadata({ data: "json, name=deletes" })
  deletes?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: DocumentServiceWarning })
  warnings?: DocumentServiceWarning[];
}
