import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRetentionConfigurationsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum DescribeRetentionConfigurationsXAmzTargetEnum {
    StarlingDoveServiceDescribeRetentionConfigurations = "StarlingDoveService.DescribeRetentionConfigurations"
}
export declare class DescribeRetentionConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRetentionConfigurationsXAmzTargetEnum;
}
export declare class DescribeRetentionConfigurationsRequest extends SpeakeasyBase {
    queryParams: DescribeRetentionConfigurationsQueryParams;
    headers: DescribeRetentionConfigurationsHeaders;
    request: shared.DescribeRetentionConfigurationsRequest;
}
export declare class DescribeRetentionConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    describeRetentionConfigurationsResponse?: shared.DescribeRetentionConfigurationsResponse;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchRetentionConfigurationException?: any;
    statusCode: number;
}
