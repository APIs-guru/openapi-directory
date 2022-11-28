import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTreeActivationQueryParams extends SpeakeasyBase {
    ignoredeactivated: boolean;
    onlymodified: boolean;
    path: string;
}
export declare class PostTreeActivationRequest extends SpeakeasyBase {
    queryParams: PostTreeActivationQueryParams;
}
export declare class PostTreeActivationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
