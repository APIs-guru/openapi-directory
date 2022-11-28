import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLocationFsxWindowsXAmzTargetEnum {
    FmrsServiceDescribeLocationFsxWindows = "FmrsService.DescribeLocationFsxWindows"
}
export declare class DescribeLocationFsxWindowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationFsxWindowsXAmzTargetEnum;
}
export declare class DescribeLocationFsxWindowsRequest extends SpeakeasyBase {
    headers: DescribeLocationFsxWindowsHeaders;
    request: shared.DescribeLocationFsxWindowsRequest;
}
export declare class DescribeLocationFsxWindowsResponse extends SpeakeasyBase {
    contentType: string;
    describeLocationFsxWindowsResponse?: shared.DescribeLocationFsxWindowsResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
