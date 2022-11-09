import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum VerifyTrustXAmzTargetEnum {
    DirectoryService20150416VerifyTrust = "DirectoryService_20150416.VerifyTrust"
}
export declare class VerifyTrustHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifyTrustXAmzTargetEnum;
}
export declare class VerifyTrustRequest extends SpeakeasyBase {
    headers: VerifyTrustHeaders;
    request: shared.VerifyTrustRequest;
}
export declare class VerifyTrustResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    verifyTrustResult?: shared.VerifyTrustResult;
}
