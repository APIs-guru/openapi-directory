import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConfigurationRecorderStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorderStatus = "StarlingDoveService.DescribeConfigurationRecorderStatus"
}
export declare class DescribeConfigurationRecorderStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigurationRecorderStatusXAmzTargetEnum;
}
export declare class DescribeConfigurationRecorderStatusRequest extends SpeakeasyBase {
    headers: DescribeConfigurationRecorderStatusHeaders;
    request: shared.DescribeConfigurationRecorderStatusRequest;
}
export declare class DescribeConfigurationRecorderStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeConfigurationRecorderStatusResponse?: shared.DescribeConfigurationRecorderStatusResponse;
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
}
