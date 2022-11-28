import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeComponentXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeComponent = "EC2WindowsBarleyService.DescribeComponent"
}
export declare class DescribeComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComponentXAmzTargetEnum;
}
export declare class DescribeComponentRequest extends SpeakeasyBase {
    headers: DescribeComponentHeaders;
    request: shared.DescribeComponentRequest;
}
export declare class DescribeComponentResponse extends SpeakeasyBase {
    contentType: string;
    describeComponentResponse?: shared.DescribeComponentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
