import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDefineRankExpressionActionEnum {
    DefineRankExpression = "DefineRankExpression"
}
/**
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
**/
export declare class GetDefineRankExpressionRankExpression extends SpeakeasyBase {
    rankExpression: string;
    rankName: string;
}
export declare enum GetDefineRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDefineRankExpressionQueryParams extends SpeakeasyBase {
    action: GetDefineRankExpressionActionEnum;
    domainName: string;
    rankExpression: GetDefineRankExpressionRankExpression;
    version: GetDefineRankExpressionVersionEnum;
}
export declare class GetDefineRankExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDefineRankExpressionRequest extends SpeakeasyBase {
    queryParams: GetDefineRankExpressionQueryParams;
    headers: GetDefineRankExpressionHeaders;
}
export declare class GetDefineRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
