import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEndpointXAmzTargetEnum {
    AmazonDmSv20160101CreateEndpoint = "AmazonDMSv20160101.CreateEndpoint"
}
export declare class CreateEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointXAmzTargetEnum;
}
export declare class CreateEndpointRequest extends SpeakeasyBase {
    headers: CreateEndpointHeaders;
    request: shared.CreateEndpointMessage;
}
export declare class CreateEndpointResponse extends SpeakeasyBase {
    accessDeniedFault?: any;
    contentType: string;
    createEndpointResponse?: shared.CreateEndpointResponse;
    invalidResourceStateFault?: any;
    kmsKeyNotAccessibleFault?: any;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    s3AccessDeniedFault?: any;
    statusCode: number;
}
