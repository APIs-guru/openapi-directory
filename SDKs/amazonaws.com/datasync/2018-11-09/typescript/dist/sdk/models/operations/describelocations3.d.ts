import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLocationS3XAmzTargetEnum {
    FmrsServiceDescribeLocationS3 = "FmrsService.DescribeLocationS3"
}
export declare class DescribeLocationS3Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationS3XAmzTargetEnum;
}
export declare class DescribeLocationS3Request extends SpeakeasyBase {
    headers: DescribeLocationS3Headers;
    request: shared.DescribeLocationS3Request;
}
export declare class DescribeLocationS3Response extends SpeakeasyBase {
    contentType: string;
    describeLocationS3Response?: shared.DescribeLocationS3Response;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
