import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConfigurationsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeConfigurations = "AWSPoseidonService_V2015_11_01.DescribeConfigurations"
}
export declare class DescribeConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigurationsXAmzTargetEnum;
}
export declare class DescribeConfigurationsRequest extends SpeakeasyBase {
    headers: DescribeConfigurationsHeaders;
    request: shared.DescribeConfigurationsRequest;
}
export declare class DescribeConfigurationsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    describeConfigurationsResponse?: shared.DescribeConfigurationsResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
