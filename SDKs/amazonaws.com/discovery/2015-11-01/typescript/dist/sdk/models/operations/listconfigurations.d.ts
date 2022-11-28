import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListConfigurationsXAmzTargetEnum {
    AwsPoseidonServiceV20151101ListConfigurations = "AWSPoseidonService_V2015_11_01.ListConfigurations"
}
export declare class ListConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListConfigurationsXAmzTargetEnum;
}
export declare class ListConfigurationsRequest extends SpeakeasyBase {
    headers: ListConfigurationsHeaders;
    request: shared.ListConfigurationsRequest;
}
export declare class ListConfigurationsResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    listConfigurationsResponse?: shared.ListConfigurationsResponse;
    resourceNotFoundException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
