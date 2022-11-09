import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteDatasetPathParams extends SpeakeasyBase {
    datasetName: string;
    identityId: string;
    identityPoolId: string;
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
    deleteDatasetResponse?: shared.DeleteDatasetResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
