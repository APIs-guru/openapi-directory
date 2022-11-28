import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeThingRegistrationTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class DescribeThingRegistrationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeThingRegistrationTaskRequest extends SpeakeasyBase {
    pathParams: DescribeThingRegistrationTaskPathParams;
    headers: DescribeThingRegistrationTaskHeaders;
}
export declare class DescribeThingRegistrationTaskResponse extends SpeakeasyBase {
    contentType: string;
    describeThingRegistrationTaskResponse?: shared.DescribeThingRegistrationTaskResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
