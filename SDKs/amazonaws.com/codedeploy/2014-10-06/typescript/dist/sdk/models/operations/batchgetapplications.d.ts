import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetApplicationsXAmzTargetEnum {
    CodeDeploy20141006BatchGetApplications = "CodeDeploy_20141006.BatchGetApplications"
}
export declare class BatchGetApplicationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetApplicationsXAmzTargetEnum;
}
export declare class BatchGetApplicationsRequest extends SpeakeasyBase {
    headers: BatchGetApplicationsHeaders;
    request: shared.BatchGetApplicationsInput;
}
export declare class BatchGetApplicationsResponse extends SpeakeasyBase {
    applicationDoesNotExistException?: any;
    applicationNameRequiredException?: any;
    batchGetApplicationsOutput?: shared.BatchGetApplicationsOutput;
    batchLimitExceededException?: any;
    contentType: string;
    invalidApplicationNameException?: any;
    statusCode: number;
}
