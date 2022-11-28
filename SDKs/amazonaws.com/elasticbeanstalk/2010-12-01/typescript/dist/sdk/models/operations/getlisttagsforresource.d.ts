import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}
export declare enum GetListTagsForResourceVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListTagsForResourceQueryParams extends SpeakeasyBase {
    action: GetListTagsForResourceActionEnum;
    resourceArn: string;
    version: GetListTagsForResourceVersionEnum;
}
export declare class GetListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListTagsForResourceRequest extends SpeakeasyBase {
    queryParams: GetListTagsForResourceQueryParams;
    headers: GetListTagsForResourceHeaders;
}
export declare class GetListTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
