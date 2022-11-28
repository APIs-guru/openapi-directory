import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyEndpointXAmzTargetEnum {
    AmazonDmSv20160101ModifyEndpoint = "AmazonDMSv20160101.ModifyEndpoint"
}
export declare class ModifyEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyEndpointXAmzTargetEnum;
}
export declare class ModifyEndpointRequest extends SpeakeasyBase {
    headers: ModifyEndpointHeaders;
    request: shared.ModifyEndpointMessage;
}
export declare class ModifyEndpointResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    invalidResourceStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    modifyEndpointResponse?: shared.ModifyEndpointResponse;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
