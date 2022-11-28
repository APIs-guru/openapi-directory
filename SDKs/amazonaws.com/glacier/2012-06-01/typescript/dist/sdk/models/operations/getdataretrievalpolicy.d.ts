import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataRetrievalPolicyPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetDataRetrievalPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDataRetrievalPolicyRequest extends SpeakeasyBase {
    pathParams: GetDataRetrievalPolicyPathParams;
    headers: GetDataRetrievalPolicyHeaders;
}
export declare class GetDataRetrievalPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getDataRetrievalPolicyOutput?: shared.GetDataRetrievalPolicyOutput;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
