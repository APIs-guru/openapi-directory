import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDatasetContentPathParams extends SpeakeasyBase {
    datasetName: string;
}
export declare class DeleteDatasetContentQueryParams extends SpeakeasyBase {
    versionId?: string;
}
export declare class DeleteDatasetContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDatasetContentRequest extends SpeakeasyBase {
    pathParams: DeleteDatasetContentPathParams;
    queryParams: DeleteDatasetContentQueryParams;
    headers: DeleteDatasetContentHeaders;
}
export declare class DeleteDatasetContentResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
