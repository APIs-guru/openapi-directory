import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLocationSmbXAmzTargetEnum {
    FmrsServiceDescribeLocationSmb = "FmrsService.DescribeLocationSmb"
}
export declare class DescribeLocationSmbHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationSmbXAmzTargetEnum;
}
export declare class DescribeLocationSmbRequest extends SpeakeasyBase {
    headers: DescribeLocationSmbHeaders;
    request: shared.DescribeLocationSmbRequest;
}
export declare class DescribeLocationSmbResponse extends SpeakeasyBase {
    contentType: string;
    describeLocationSmbResponse?: shared.DescribeLocationSmbResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
