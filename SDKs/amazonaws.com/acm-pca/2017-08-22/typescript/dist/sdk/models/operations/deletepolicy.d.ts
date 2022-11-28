import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePolicyXAmzTargetEnum {
    AcmPrivateCaDeletePolicy = "ACMPrivateCA.DeletePolicy"
}
export declare class DeletePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePolicyXAmzTargetEnum;
}
export declare class DeletePolicyRequest extends SpeakeasyBase {
    headers: DeletePolicyHeaders;
    request: shared.DeletePolicyRequest;
}
export declare class DeletePolicyResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    lockoutPreventedException?: any;
    requestFailedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
