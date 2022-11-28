import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLocationNfsXAmzTargetEnum {
    FmrsServiceDescribeLocationNfs = "FmrsService.DescribeLocationNfs"
}
export declare class DescribeLocationNfsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationNfsXAmzTargetEnum;
}
export declare class DescribeLocationNfsRequest extends SpeakeasyBase {
    headers: DescribeLocationNfsHeaders;
    request: shared.DescribeLocationNfsRequest;
}
export declare class DescribeLocationNfsResponse extends SpeakeasyBase {
    contentType: string;
    describeLocationNfsResponse?: shared.DescribeLocationNfsResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
