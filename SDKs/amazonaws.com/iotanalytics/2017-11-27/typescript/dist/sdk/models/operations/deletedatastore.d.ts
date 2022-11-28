import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDatastorePathParams extends SpeakeasyBase {
    datastoreName: string;
}
export declare class DeleteDatastoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDatastoreRequest extends SpeakeasyBase {
    pathParams: DeleteDatastorePathParams;
    headers: DeleteDatastoreHeaders;
}
export declare class DeleteDatastoreResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
