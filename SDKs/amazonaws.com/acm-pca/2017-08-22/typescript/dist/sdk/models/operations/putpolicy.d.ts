import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutPolicyXAmzTargetEnum {
    AcmPrivateCaPutPolicy = "ACMPrivateCA.PutPolicy"
}
export declare class PutPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPolicyXAmzTargetEnum;
}
export declare class PutPolicyRequest extends SpeakeasyBase {
    headers: PutPolicyHeaders;
    request: shared.PutPolicyRequest;
}
export declare class PutPolicyResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArnException?: any;
    invalidPolicyException?: any;
    invalidStateException?: any;
    lockoutPreventedException?: any;
    requestFailedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
