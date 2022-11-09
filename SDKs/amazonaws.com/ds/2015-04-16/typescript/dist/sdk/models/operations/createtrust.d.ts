import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateTrustXAmzTargetEnum {
    DirectoryService20150416CreateTrust = "DirectoryService_20150416.CreateTrust"
}
export declare class CreateTrustHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrustXAmzTargetEnum;
}
export declare class CreateTrustRequest extends SpeakeasyBase {
    headers: CreateTrustHeaders;
    request: shared.CreateTrustRequest;
}
export declare class CreateTrustResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createTrustResult?: shared.CreateTrustResult;
    entityAlreadyExistsException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
