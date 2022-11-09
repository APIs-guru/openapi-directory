import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManualEvidence
/** 
 *  Evidence that is uploaded to Audit Manager manually. 
**/
export class ManualEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3ResourcePath" })
  s3ResourcePath?: string;
}
