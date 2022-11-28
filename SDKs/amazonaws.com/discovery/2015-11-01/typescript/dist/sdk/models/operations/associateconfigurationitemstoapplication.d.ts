import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateConfigurationItemsToApplicationXAmzTargetEnum {
    AwsPoseidonServiceV20151101AssociateConfigurationItemsToApplication = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication"
}
export declare class AssociateConfigurationItemsToApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateConfigurationItemsToApplicationXAmzTargetEnum;
}
export declare class AssociateConfigurationItemsToApplicationRequest extends SpeakeasyBase {
    headers: AssociateConfigurationItemsToApplicationHeaders;
    request: shared.AssociateConfigurationItemsToApplicationRequest;
}
export declare class AssociateConfigurationItemsToApplicationResponse extends SpeakeasyBase {
    associateConfigurationItemsToApplicationResponse?: Map<string, any>;
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
