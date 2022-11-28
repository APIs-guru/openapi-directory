import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}
export declare enum PostRemoveTagsFromResourceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRemoveTagsFromResourceQueryParams extends SpeakeasyBase {
    action: PostRemoveTagsFromResourceActionEnum;
    version: PostRemoveTagsFromResourceVersionEnum;
}
export declare class PostRemoveTagsFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveTagsFromResourceRequest extends SpeakeasyBase {
    queryParams: PostRemoveTagsFromResourceQueryParams;
    headers: PostRemoveTagsFromResourceHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveTagsFromResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
