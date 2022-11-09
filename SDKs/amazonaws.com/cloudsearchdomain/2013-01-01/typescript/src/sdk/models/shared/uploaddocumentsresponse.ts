import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentServiceWarning } from "./documentservicewarning";


// UploadDocumentsResponse
/** 
 * Contains the response to an <code>UploadDocuments</code> request.
**/
export class UploadDocumentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adds" })
  adds?: number;

  @Metadata({ data: "json, name=deletes" })
  deletes?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.DocumentServiceWarning })
  warnings?: DocumentServiceWarning[];
}
