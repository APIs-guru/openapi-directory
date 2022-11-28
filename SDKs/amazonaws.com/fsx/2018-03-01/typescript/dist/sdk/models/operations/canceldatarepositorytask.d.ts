import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelDataRepositoryTaskXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CancelDataRepositoryTask = "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask"
}
export declare class CancelDataRepositoryTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelDataRepositoryTaskXAmzTargetEnum;
}
export declare class CancelDataRepositoryTaskRequest extends SpeakeasyBase {
    headers: CancelDataRepositoryTaskHeaders;
    request: shared.CancelDataRepositoryTaskRequest;
}
export declare class CancelDataRepositoryTaskResponse extends SpeakeasyBase {
    badRequest?: any;
    cancelDataRepositoryTaskResponse?: shared.CancelDataRepositoryTaskResponse;
    contentType: string;
    dataRepositoryTaskEnded?: any;
    dataRepositoryTaskNotFound?: any;
    internalServerError?: any;
    statusCode: number;
    unsupportedOperation?: any;
}
