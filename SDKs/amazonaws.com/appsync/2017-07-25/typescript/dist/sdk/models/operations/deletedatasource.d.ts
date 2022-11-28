import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDataSourcePathParams extends SpeakeasyBase {
    apiId: string;
    name: string;
}
export declare class DeleteDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDataSourceRequest extends SpeakeasyBase {
    pathParams: DeleteDataSourcePathParams;
    headers: DeleteDataSourceHeaders;
}
export declare class DeleteDataSourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteDataSourceResponse?: Map<string, any>;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
