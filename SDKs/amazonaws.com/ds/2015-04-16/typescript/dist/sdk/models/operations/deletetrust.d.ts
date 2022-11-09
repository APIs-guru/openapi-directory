import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteTrustXAmzTargetEnum {
    DirectoryService20150416DeleteTrust = "DirectoryService_20150416.DeleteTrust"
}
export declare class DeleteTrustHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTrustXAmzTargetEnum;
}
export declare class DeleteTrustRequest extends SpeakeasyBase {
    headers: DeleteTrustHeaders;
    request: shared.DeleteTrustRequest;
}
export declare class DeleteTrustResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteTrustResult?: shared.DeleteTrustResult;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
