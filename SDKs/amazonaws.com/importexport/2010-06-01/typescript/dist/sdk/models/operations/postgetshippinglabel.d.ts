import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetShippingLabelActionEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum PostGetShippingLabelOperationEnum {
    GetShippingLabel = "GetShippingLabel"
}
export declare enum PostGetShippingLabelVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class PostGetShippingLabelQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostGetShippingLabelActionEnum;
    operation: PostGetShippingLabelOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostGetShippingLabelVersionEnum;
}
export declare class PostGetShippingLabelRequest extends SpeakeasyBase {
    queryParams: PostGetShippingLabelQueryParams;
    request?: Uint8Array;
}
export declare class PostGetShippingLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
