import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGraphqlApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class DeleteGraphqlApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGraphqlApiRequest extends SpeakeasyBase {
    pathParams: DeleteGraphqlApiPathParams;
    headers: DeleteGraphqlApiHeaders;
}
export declare class DeleteGraphqlApiResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteGraphqlApiResponse?: Map<string, any>;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
