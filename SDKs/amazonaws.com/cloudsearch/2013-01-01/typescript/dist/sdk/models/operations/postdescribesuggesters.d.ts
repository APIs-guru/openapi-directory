import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSuggestersActionEnum {
    DescribeSuggesters = "DescribeSuggesters"
}
export declare enum PostDescribeSuggestersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDescribeSuggestersQueryParams extends SpeakeasyBase {
    action: PostDescribeSuggestersActionEnum;
    version: PostDescribeSuggestersVersionEnum;
}
export declare class PostDescribeSuggestersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSuggestersRequest extends SpeakeasyBase {
    queryParams: PostDescribeSuggestersQueryParams;
    headers: PostDescribeSuggestersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSuggestersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
