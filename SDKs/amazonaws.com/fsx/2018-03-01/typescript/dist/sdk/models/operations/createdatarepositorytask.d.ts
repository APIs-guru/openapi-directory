import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDataRepositoryTaskXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateDataRepositoryTask = "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask"
}
export declare class CreateDataRepositoryTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataRepositoryTaskXAmzTargetEnum;
}
export declare class CreateDataRepositoryTaskRequest extends SpeakeasyBase {
    headers: CreateDataRepositoryTaskHeaders;
    request: shared.CreateDataRepositoryTaskRequest;
}
export declare class CreateDataRepositoryTaskResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    createDataRepositoryTaskResponse?: shared.CreateDataRepositoryTaskResponse;
    dataRepositoryTaskExecuting?: any;
    fileSystemNotFound?: any;
    incompatibleParameterError?: any;
    internalServerError?: any;
    serviceLimitExceeded?: any;
    statusCode: number;
    unsupportedOperation?: any;
}
