import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTypePathParams extends SpeakeasyBase {
    apiId: string;
    typeName: string;
}
export declare class DeleteTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTypeRequest extends SpeakeasyBase {
    pathParams: DeleteTypePathParams;
    headers: DeleteTypeHeaders;
}
export declare class DeleteTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteTypeResponse?: Map<string, any>;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
