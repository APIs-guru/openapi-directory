import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteResolverPathParams extends SpeakeasyBase {
    apiId: string;
    fieldName: string;
    typeName: string;
}
export declare class DeleteResolverHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResolverRequest extends SpeakeasyBase {
    pathParams: DeleteResolverPathParams;
    headers: DeleteResolverHeaders;
}
export declare class DeleteResolverResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteResolverResponse?: Map<string, any>;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
