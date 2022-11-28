import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetDataRetrievalPolicyPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class SetDataRetrievalPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Data retrieval policy.
**/
export declare class SetDataRetrievalPolicyRequestBodyPolicy extends SpeakeasyBase {
    rules?: shared.DataRetrievalRule[];
}
export declare class SetDataRetrievalPolicyRequestBody extends SpeakeasyBase {
    policy?: SetDataRetrievalPolicyRequestBodyPolicy;
}
export declare class SetDataRetrievalPolicyRequest extends SpeakeasyBase {
    pathParams: SetDataRetrievalPolicyPathParams;
    headers: SetDataRetrievalPolicyHeaders;
    request: SetDataRetrievalPolicyRequestBody;
}
export declare class SetDataRetrievalPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
