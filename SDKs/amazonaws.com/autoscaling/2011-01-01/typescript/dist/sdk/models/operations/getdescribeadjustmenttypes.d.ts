import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeAdjustmentTypesActionEnum {
    DescribeAdjustmentTypes = "DescribeAdjustmentTypes"
}
export declare enum GetDescribeAdjustmentTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeAdjustmentTypesQueryParams extends SpeakeasyBase {
    action: GetDescribeAdjustmentTypesActionEnum;
    version: GetDescribeAdjustmentTypesVersionEnum;
}
export declare class GetDescribeAdjustmentTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAdjustmentTypesRequest extends SpeakeasyBase {
    queryParams: GetDescribeAdjustmentTypesQueryParams;
    headers: GetDescribeAdjustmentTypesHeaders;
}
export declare class GetDescribeAdjustmentTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
