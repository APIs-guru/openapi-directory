import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigApacheSlingDavExServletQueryParams extends SpeakeasyBase {
    alias?: string;
    aliasAtTypeHint?: string;
    davCreateAbsoluteUri?: boolean;
    davCreateAbsoluteUriAtTypeHint?: string;
}
export declare class PostConfigApacheSlingDavExServletRequest extends SpeakeasyBase {
    queryParams: PostConfigApacheSlingDavExServletQueryParams;
}
export declare class PostConfigApacheSlingDavExServletResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
