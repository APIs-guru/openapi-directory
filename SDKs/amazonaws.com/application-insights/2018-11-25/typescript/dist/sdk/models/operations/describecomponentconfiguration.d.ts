import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeComponentConfigurationXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeComponentConfiguration = "EC2WindowsBarleyService.DescribeComponentConfiguration"
}
export declare class DescribeComponentConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComponentConfigurationXAmzTargetEnum;
}
export declare class DescribeComponentConfigurationRequest extends SpeakeasyBase {
    headers: DescribeComponentConfigurationHeaders;
    request: shared.DescribeComponentConfigurationRequest;
}
export declare class DescribeComponentConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeComponentConfigurationResponse?: shared.DescribeComponentConfigurationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
