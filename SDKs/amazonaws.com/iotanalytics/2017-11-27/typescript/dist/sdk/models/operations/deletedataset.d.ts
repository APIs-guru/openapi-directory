import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDatasetPathParams extends SpeakeasyBase {
    datasetName: string;
}
export declare class DeleteDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDatasetRequest extends SpeakeasyBase {
    pathParams: DeleteDatasetPathParams;
    headers: DeleteDatasetHeaders;
}
export declare class DeleteDatasetResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
