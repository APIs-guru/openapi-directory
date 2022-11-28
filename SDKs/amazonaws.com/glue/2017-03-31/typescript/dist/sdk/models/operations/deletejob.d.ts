import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteJobXAmzTargetEnum {
    AwsGlueDeleteJob = "AWSGlue.DeleteJob"
}
export declare class DeleteJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteJobXAmzTargetEnum;
}
export declare class DeleteJobRequest extends SpeakeasyBase {
    headers: DeleteJobHeaders;
    request: shared.DeleteJobRequest;
}
export declare class DeleteJobResponse extends SpeakeasyBase {
    contentType: string;
    deleteJobResponse?: shared.DeleteJobResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
