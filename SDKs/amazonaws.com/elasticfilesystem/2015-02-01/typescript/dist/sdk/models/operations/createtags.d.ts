import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTagsPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class CreateTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTagsRequestBody extends SpeakeasyBase {
    tags: shared.Tag[];
}
export declare class CreateTagsRequest extends SpeakeasyBase {
    pathParams: CreateTagsPathParams;
    headers: CreateTagsHeaders;
    request: CreateTagsRequestBody;
}
export declare class CreateTagsResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
