import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostBundlePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PostBundleQueryParams extends SpeakeasyBase {
    action: string;
}
export declare class PostBundleRequest extends SpeakeasyBase {
    pathParams: PostBundlePathParams;
    queryParams: PostBundleQueryParams;
}
export declare class PostBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
