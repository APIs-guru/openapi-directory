import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDimensionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeleteDimensionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDimensionRequest extends SpeakeasyBase {
    pathParams: DeleteDimensionPathParams;
    headers: DeleteDimensionHeaders;
}
export declare class DeleteDimensionResponse extends SpeakeasyBase {
    contentType: string;
    deleteDimensionResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
}
