import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateConfigurationItemsFromApplicationXAmzTargetEnum {
    AwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication = "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication"
}
export declare class DisassociateConfigurationItemsFromApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateConfigurationItemsFromApplicationXAmzTargetEnum;
}
export declare class DisassociateConfigurationItemsFromApplicationRequest extends SpeakeasyBase {
    headers: DisassociateConfigurationItemsFromApplicationHeaders;
    request: shared.DisassociateConfigurationItemsFromApplicationRequest;
}
export declare class DisassociateConfigurationItemsFromApplicationResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    disassociateConfigurationItemsFromApplicationResponse?: Map<string, any>;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
}
