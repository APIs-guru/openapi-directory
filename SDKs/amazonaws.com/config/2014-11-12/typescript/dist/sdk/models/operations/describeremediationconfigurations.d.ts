import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeRemediationConfigurationsXAmzTargetEnum {
    StarlingDoveServiceDescribeRemediationConfigurations = "StarlingDoveService.DescribeRemediationConfigurations"
}
export declare class DescribeRemediationConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRemediationConfigurationsXAmzTargetEnum;
}
export declare class DescribeRemediationConfigurationsRequest extends SpeakeasyBase {
    headers: DescribeRemediationConfigurationsHeaders;
    request: shared.DescribeRemediationConfigurationsRequest;
}
export declare class DescribeRemediationConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    describeRemediationConfigurationsResponse?: shared.DescribeRemediationConfigurationsResponse;
    statusCode: number;
}
