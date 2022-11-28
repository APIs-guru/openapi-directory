import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSetPasswordQueryParams extends SpeakeasyBase {
    old: string;
    plain: string;
    verify: string;
}
export declare class PostSetPasswordRequest extends SpeakeasyBase {
    queryParams: PostSetPasswordQueryParams;
}
export declare class PostSetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postSetPasswordDefaultTextPlainString?: string;
}
