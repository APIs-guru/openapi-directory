import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeThingPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class DescribeThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeThingRequest extends SpeakeasyBase {
    pathParams: DescribeThingPathParams;
    headers: DescribeThingHeaders;
}
export declare class DescribeThingResponse extends SpeakeasyBase {
    contentType: string;
    describeThingResponse?: shared.DescribeThingResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
