import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigAemHealthCheckServletQueryParams extends SpeakeasyBase {
    bundlesIgnored?: string[];
    bundlesIgnoredAtTypeHint?: string;
}
export declare class PostConfigAemHealthCheckServletRequest extends SpeakeasyBase {
    queryParams: PostConfigAemHealthCheckServletQueryParams;
}
export declare class PostConfigAemHealthCheckServletResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
