import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigAemPasswordResetQueryParams extends SpeakeasyBase {
    pwdresetAuthorizables?: string[];
    pwdresetAuthorizablesAtTypeHint?: string;
}
export declare class PostConfigAemPasswordResetRequest extends SpeakeasyBase {
    queryParams: PostConfigAemPasswordResetQueryParams;
}
export declare class PostConfigAemPasswordResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
