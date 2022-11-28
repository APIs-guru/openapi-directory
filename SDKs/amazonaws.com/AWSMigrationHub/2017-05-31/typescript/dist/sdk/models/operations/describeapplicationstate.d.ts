import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeApplicationStateXAmzTargetEnum {
    AwsMigrationHubDescribeApplicationState = "AWSMigrationHub.DescribeApplicationState"
}
export declare class DescribeApplicationStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationStateXAmzTargetEnum;
}
export declare class DescribeApplicationStateRequest extends SpeakeasyBase {
    headers: DescribeApplicationStateHeaders;
    request: shared.DescribeApplicationStateRequest;
}
export declare class DescribeApplicationStateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeApplicationStateResult?: shared.DescribeApplicationStateResult;
    homeRegionNotSetException?: any;
    internalServerError?: any;
    invalidInputException?: any;
    policyErrorException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
