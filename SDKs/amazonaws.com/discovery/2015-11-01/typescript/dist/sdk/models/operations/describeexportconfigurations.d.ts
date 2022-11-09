import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeExportConfigurationsXAmzTargetEnum {
    AwsPoseidonServiceV20151101DescribeExportConfigurations = "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations"
}
export declare class DescribeExportConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportConfigurationsXAmzTargetEnum;
}
export declare class DescribeExportConfigurationsRequest extends SpeakeasyBase {
    headers: DescribeExportConfigurationsHeaders;
    request: shared.DescribeExportConfigurationsRequest;
}
export declare class DescribeExportConfigurationsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    describeExportConfigurationsResponse?: shared.DescribeExportConfigurationsResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
