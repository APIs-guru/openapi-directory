import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteExpressionActionEnum {
    DeleteExpression = "DeleteExpression"
}
export declare enum PostDeleteExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDeleteExpressionQueryParams extends SpeakeasyBase {
    action: PostDeleteExpressionActionEnum;
    version: PostDeleteExpressionVersionEnum;
}
export declare class PostDeleteExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteExpressionRequest extends SpeakeasyBase {
    queryParams: PostDeleteExpressionQueryParams;
    headers: PostDeleteExpressionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
