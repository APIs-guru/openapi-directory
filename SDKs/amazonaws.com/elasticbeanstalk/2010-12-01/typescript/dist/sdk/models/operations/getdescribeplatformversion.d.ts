import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribePlatformVersionActionEnum {
    DescribePlatformVersion = "DescribePlatformVersion"
}
export declare enum GetDescribePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribePlatformVersionQueryParams extends SpeakeasyBase {
    action: GetDescribePlatformVersionActionEnum;
    platformArn?: string;
    version: GetDescribePlatformVersionVersionEnum;
}
export declare class GetDescribePlatformVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribePlatformVersionRequest extends SpeakeasyBase {
    queryParams: GetDescribePlatformVersionQueryParams;
    headers: GetDescribePlatformVersionHeaders;
}
export declare class GetDescribePlatformVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
