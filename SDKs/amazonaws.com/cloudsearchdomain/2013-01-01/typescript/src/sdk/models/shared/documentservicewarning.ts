import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentServiceWarning
/** 
 * A warning returned by the document service when an issue is discovered while processing an upload request.
**/
export class DocumentServiceWarning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
