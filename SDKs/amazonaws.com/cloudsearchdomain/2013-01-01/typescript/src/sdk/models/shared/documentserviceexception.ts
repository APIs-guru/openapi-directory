import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentServiceException
/** 
 * Information about any problems encountered while processing an upload request.
**/
export class DocumentServiceException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
