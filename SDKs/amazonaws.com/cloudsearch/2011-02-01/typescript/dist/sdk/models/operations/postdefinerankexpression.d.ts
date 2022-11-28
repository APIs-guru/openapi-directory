import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDefineRankExpressionActionEnum {
    DefineRankExpression = "DefineRankExpression"
}
export declare enum PostDefineRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDefineRankExpressionQueryParams extends SpeakeasyBase {
    action: PostDefineRankExpressionActionEnum;
    version: PostDefineRankExpressionVersionEnum;
}
export declare class PostDefineRankExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDefineRankExpressionRequest extends SpeakeasyBase {
    queryParams: PostDefineRankExpressionQueryParams;
    headers: PostDefineRankExpressionHeaders;
    request?: Uint8Array;
}
export declare class PostDefineRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
