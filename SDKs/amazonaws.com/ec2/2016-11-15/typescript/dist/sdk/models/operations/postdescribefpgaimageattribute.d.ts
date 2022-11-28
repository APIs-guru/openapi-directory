import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeFpgaImageAttributeActionEnum {
    DescribeFpgaImageAttribute = "DescribeFpgaImageAttribute"
}
export declare enum PostDescribeFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeFpgaImageAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeFpgaImageAttributeActionEnum;
    version: PostDescribeFpgaImageAttributeVersionEnum;
}
export declare class PostDescribeFpgaImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeFpgaImageAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeFpgaImageAttributeQueryParams;
    headers: PostDescribeFpgaImageAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeFpgaImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
