import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ExportConfigurationsXAmzTargetEnum {
    AwsPoseidonServiceV20151101ExportConfigurations = "AWSPoseidonService_V2015_11_01.ExportConfigurations"
}
export declare class ExportConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportConfigurationsXAmzTargetEnum;
}
export declare class ExportConfigurationsRequest extends SpeakeasyBase {
    headers: ExportConfigurationsHeaders;
}
export declare class ExportConfigurationsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    exportConfigurationsResponse?: shared.ExportConfigurationsResponse;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    operationNotPermittedException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
