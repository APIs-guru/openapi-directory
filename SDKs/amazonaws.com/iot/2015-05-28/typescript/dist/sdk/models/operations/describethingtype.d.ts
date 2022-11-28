import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeThingTypePathParams extends SpeakeasyBase {
    thingTypeName: string;
}
export declare class DescribeThingTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeThingTypeRequest extends SpeakeasyBase {
    pathParams: DescribeThingTypePathParams;
    headers: DescribeThingTypeHeaders;
}
export declare class DescribeThingTypeResponse extends SpeakeasyBase {
    contentType: string;
    describeThingTypeResponse?: shared.DescribeThingTypeResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
