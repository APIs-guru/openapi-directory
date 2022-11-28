import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteControlPathParams extends SpeakeasyBase {
    controlId: string;
}
export declare class DeleteControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteControlRequest extends SpeakeasyBase {
    pathParams: DeleteControlPathParams;
    headers: DeleteControlHeaders;
}
export declare class DeleteControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteControlResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
