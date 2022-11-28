import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteExpressionActionEnum {
    DeleteExpression = "DeleteExpression"
}
export declare enum GetDeleteExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetDeleteExpressionQueryParams extends SpeakeasyBase {
    action: GetDeleteExpressionActionEnum;
    domainName: string;
    expressionName: string;
    version: GetDeleteExpressionVersionEnum;
}
export declare class GetDeleteExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteExpressionRequest extends SpeakeasyBase {
    queryParams: GetDeleteExpressionQueryParams;
    headers: GetDeleteExpressionHeaders;
}
export declare class GetDeleteExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
