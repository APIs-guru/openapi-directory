import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataRetrievalPolicy } from "./dataretrievalpolicy";


// GetDataRetrievalPolicyOutput
/** 
 * Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.
**/
export class GetDataRetrievalPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: DataRetrievalPolicy;
}
