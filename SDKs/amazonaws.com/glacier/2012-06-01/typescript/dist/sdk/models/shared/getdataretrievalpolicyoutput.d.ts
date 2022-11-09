import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataRetrievalPolicy } from "./dataretrievalpolicy";
/**
 * Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.
**/
export declare class GetDataRetrievalPolicyOutput extends SpeakeasyBase {
    policy?: DataRetrievalPolicy;
}
