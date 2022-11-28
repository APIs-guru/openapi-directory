import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRetrievalPolicy } from "./dataretrievalpolicy";



// GetDataRetrievalPolicyOutput
/** 
 * Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.
**/
export class GetDataRetrievalPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: DataRetrievalPolicy;
}
