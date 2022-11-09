import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDefineExpressionActionEnum {
    DefineExpression = "DefineExpression"
}
/**
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
**/
export declare class GetDefineExpressionExpression extends SpeakeasyBase {
    expressionName: string;
    expressionValue: string;
}
export declare enum GetDefineExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDefineExpressionQueryParams extends SpeakeasyBase {
    action: GetDefineExpressionActionEnum;
    domainName: string;
    expression: GetDefineExpressionExpression;
    version: GetDefineExpressionVersionEnum;
}
export declare class GetDefineExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDefineExpressionRequest extends SpeakeasyBase {
    queryParams: GetDefineExpressionQueryParams;
    headers: GetDefineExpressionHeaders;
}
export declare class GetDefineExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
