import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateInputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The definition of the input.
**/
export declare class CreateInputRequestBodyInputDefinition extends SpeakeasyBase {
    attributes?: shared.Attribute[];
}
export declare class CreateInputRequestBody extends SpeakeasyBase {
    inputDefinition: CreateInputRequestBodyInputDefinition;
    inputDescription?: string;
    inputName: string;
    tags?: shared.Tag[];
}
export declare class CreateInputRequest extends SpeakeasyBase {
    headers: CreateInputHeaders;
    request: CreateInputRequestBody;
}
export declare class CreateInputResponse extends SpeakeasyBase {
    contentType: string;
    createInputResponse?: shared.CreateInputResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
