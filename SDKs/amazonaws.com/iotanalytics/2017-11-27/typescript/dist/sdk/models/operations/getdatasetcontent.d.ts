import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetContentPathParams extends SpeakeasyBase {
    datasetName: string;
}
export declare class GetDatasetContentQueryParams extends SpeakeasyBase {
    versionId?: string;
}
export declare class GetDatasetContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDatasetContentRequest extends SpeakeasyBase {
    pathParams: GetDatasetContentPathParams;
    queryParams: GetDatasetContentQueryParams;
    headers: GetDatasetContentHeaders;
}
export declare class GetDatasetContentResponse extends SpeakeasyBase {
    contentType: string;
    getDatasetContentResponse?: shared.GetDatasetContentResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
