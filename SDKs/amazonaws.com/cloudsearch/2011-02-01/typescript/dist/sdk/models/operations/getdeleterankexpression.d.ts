import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteRankExpressionActionEnum {
    DeleteRankExpression = "DeleteRankExpression"
}
export declare enum GetDeleteRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetDeleteRankExpressionQueryParams extends SpeakeasyBase {
    action: GetDeleteRankExpressionActionEnum;
    domainName: string;
    rankName: string;
    version: GetDeleteRankExpressionVersionEnum;
}
export declare class GetDeleteRankExpressionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteRankExpressionRequest extends SpeakeasyBase {
    queryParams: GetDeleteRankExpressionQueryParams;
    headers: GetDeleteRankExpressionHeaders;
}
export declare class GetDeleteRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
