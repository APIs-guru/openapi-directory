import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeApplicationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeApplication = "EC2WindowsBarleyService.DescribeApplication"
}
export declare class DescribeApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationXAmzTargetEnum;
}
export declare class DescribeApplicationRequest extends SpeakeasyBase {
    headers: DescribeApplicationHeaders;
    request: shared.DescribeApplicationRequest;
}
export declare class DescribeApplicationResponse extends SpeakeasyBase {
    contentType: string;
    describeApplicationResponse?: shared.DescribeApplicationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
