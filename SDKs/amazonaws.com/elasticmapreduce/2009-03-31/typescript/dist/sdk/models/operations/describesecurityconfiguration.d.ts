import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeSecurityConfigurationXAmzTargetEnum {
    ElasticMapReduceDescribeSecurityConfiguration = "ElasticMapReduce.DescribeSecurityConfiguration"
}
export declare class DescribeSecurityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSecurityConfigurationXAmzTargetEnum;
}
export declare class DescribeSecurityConfigurationRequest extends SpeakeasyBase {
    headers: DescribeSecurityConfigurationHeaders;
    request: shared.DescribeSecurityConfigurationInput;
}
export declare class DescribeSecurityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeSecurityConfigurationOutput?: shared.DescribeSecurityConfigurationOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
