import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentServiceException
/** 
 * Information about any problems encountered while processing an upload request.
**/
export class DocumentServiceException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
