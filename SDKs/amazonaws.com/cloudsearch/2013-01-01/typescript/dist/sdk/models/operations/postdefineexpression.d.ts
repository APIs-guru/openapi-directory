import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDefineExpressionActionEnum {
    DefineExpression = "DefineExpression"
}
export declare enum PostDefineExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDefineExpressionQueryParams extends SpeakeasyBase {
    action: PostDefineExpressionActionEnum;
    version: PostDefineExpressionVersionEnum;
}
export declare class PostDefineExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDefineExpressionRequest extends SpeakeasyBase {
    queryParams: PostDefineExpressionQueryParams;
    headers: PostDefineExpressionHeaders;
    request?: Uint8Array;
}
export declare class PostDefineExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
