import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCqActionsQueryParams extends SpeakeasyBase {
    authorizableId: string;
    changelog: string;
}
export declare class PostCqActionsRequest extends SpeakeasyBase {
    queryParams: PostCqActionsQueryParams;
}
export declare class PostCqActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
