import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManualEvidence
/** 
 *  Evidence that is uploaded to Audit Manager manually. 
**/
export class ManualEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3ResourcePath" })
  s3ResourcePath?: string;
}
