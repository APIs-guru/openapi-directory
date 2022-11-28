import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAdjustmentTypesActionEnum {
    DescribeAdjustmentTypes = "DescribeAdjustmentTypes"
}
export declare enum PostDescribeAdjustmentTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeAdjustmentTypesQueryParams extends SpeakeasyBase {
    action: PostDescribeAdjustmentTypesActionEnum;
    version: PostDescribeAdjustmentTypesVersionEnum;
}
export declare class PostDescribeAdjustmentTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAdjustmentTypesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAdjustmentTypesQueryParams;
    headers: PostDescribeAdjustmentTypesHeaders;
}
export declare class PostDescribeAdjustmentTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
