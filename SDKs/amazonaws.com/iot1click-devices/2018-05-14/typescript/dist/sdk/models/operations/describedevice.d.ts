import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeDevicePathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class DescribeDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDeviceRequest extends SpeakeasyBase {
    pathParams: DescribeDevicePathParams;
    headers: DescribeDeviceHeaders;
}
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    contentType: string;
    describeDeviceResponse?: shared.DescribeDeviceResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
