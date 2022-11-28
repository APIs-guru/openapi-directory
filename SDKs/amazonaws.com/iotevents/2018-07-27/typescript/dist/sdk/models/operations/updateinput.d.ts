import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateInputPathParams extends SpeakeasyBase {
    inputName: string;
}
export declare class UpdateInputHeaders extends SpeakeasyBase {
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
export declare class UpdateInputRequestBodyInputDefinition extends SpeakeasyBase {
    attributes?: shared.Attribute[];
}
export declare class UpdateInputRequestBody extends SpeakeasyBase {
    inputDefinition: UpdateInputRequestBodyInputDefinition;
    inputDescription?: string;
}
export declare class UpdateInputRequest extends SpeakeasyBase {
    pathParams: UpdateInputPathParams;
    headers: UpdateInputHeaders;
    request: UpdateInputRequestBody;
}
export declare class UpdateInputResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateInputResponse?: shared.UpdateInputResponse;
}
