import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTagsPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class DeleteTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTagsRequestBody extends SpeakeasyBase {
    tagKeys: string[];
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    pathParams: DeleteTagsPathParams;
    headers: DeleteTagsHeaders;
    request: DeleteTagsRequestBody;
}
export declare class DeleteTagsResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
