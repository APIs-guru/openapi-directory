import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeLogPattern = "EC2WindowsBarleyService.DescribeLogPattern"
}
export declare class DescribeLogPatternHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLogPatternXAmzTargetEnum;
}
export declare class DescribeLogPatternRequest extends SpeakeasyBase {
    headers: DescribeLogPatternHeaders;
    request: shared.DescribeLogPatternRequest;
}
export declare class DescribeLogPatternResponse extends SpeakeasyBase {
    contentType: string;
    describeLogPatternResponse?: shared.DescribeLogPatternResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
