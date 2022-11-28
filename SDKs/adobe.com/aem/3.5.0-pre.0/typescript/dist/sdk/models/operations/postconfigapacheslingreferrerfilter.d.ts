import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigApacheSlingReferrerFilterQueryParams extends SpeakeasyBase {
    allowEmpty?: boolean;
    allowEmptyAtTypeHint?: string;
    allowHosts?: string;
    allowHostsRegexp?: string;
    allowHostsRegexpAtTypeHint?: string;
    allowHostsAtTypeHint?: string;
    filterMethods?: string;
    filterMethodsAtTypeHint?: string;
}
export declare class PostConfigApacheSlingReferrerFilterRequest extends SpeakeasyBase {
    queryParams: PostConfigApacheSlingReferrerFilterQueryParams;
}
export declare class PostConfigApacheSlingReferrerFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
