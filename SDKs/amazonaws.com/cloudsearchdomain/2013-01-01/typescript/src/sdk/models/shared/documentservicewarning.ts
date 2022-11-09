import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentServiceWarning
/** 
 * A warning returned by the document service when an issue is discovered while processing an upload request.
**/
export class DocumentServiceWarning extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
