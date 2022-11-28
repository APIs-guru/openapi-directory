import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteInputPathParams extends SpeakeasyBase {
    inputName: string;
}
export declare class DeleteInputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteInputRequest extends SpeakeasyBase {
    pathParams: DeleteInputPathParams;
    headers: DeleteInputHeaders;
}
export declare class DeleteInputResponse extends SpeakeasyBase {
    contentType: string;
    deleteInputResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
