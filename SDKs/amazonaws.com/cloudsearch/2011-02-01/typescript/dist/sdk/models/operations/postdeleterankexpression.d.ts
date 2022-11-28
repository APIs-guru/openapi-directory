import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteRankExpressionActionEnum {
    DeleteRankExpression = "DeleteRankExpression"
}
export declare enum PostDeleteRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDeleteRankExpressionQueryParams extends SpeakeasyBase {
    action: PostDeleteRankExpressionActionEnum;
    version: PostDeleteRankExpressionVersionEnum;
}
export declare class PostDeleteRankExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteRankExpressionRequest extends SpeakeasyBase {
    queryParams: PostDeleteRankExpressionQueryParams;
    headers: PostDeleteRankExpressionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
