import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDatasetContentPathParams extends SpeakeasyBase {
    datasetName: string;
}
export declare class CreateDatasetContentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDatasetContentRequestBody extends SpeakeasyBase {
    versionId?: string;
}
export declare class CreateDatasetContentRequest extends SpeakeasyBase {
    pathParams: CreateDatasetContentPathParams;
    headers: CreateDatasetContentHeaders;
    request: CreateDatasetContentRequestBody;
}
export declare class CreateDatasetContentResponse extends SpeakeasyBase {
    contentType: string;
    createDatasetContentResponse?: shared.CreateDatasetContentResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
