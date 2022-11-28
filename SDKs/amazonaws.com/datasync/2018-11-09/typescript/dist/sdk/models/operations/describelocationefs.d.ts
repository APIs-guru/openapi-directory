import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLocationEfsXAmzTargetEnum {
    FmrsServiceDescribeLocationEfs = "FmrsService.DescribeLocationEfs"
}
export declare class DescribeLocationEfsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationEfsXAmzTargetEnum;
}
export declare class DescribeLocationEfsRequest extends SpeakeasyBase {
    headers: DescribeLocationEfsHeaders;
    request: shared.DescribeLocationEfsRequest;
}
export declare class DescribeLocationEfsResponse extends SpeakeasyBase {
    contentType: string;
    describeLocationEfsResponse?: shared.DescribeLocationEfsResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
