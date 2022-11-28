import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetCoipPoolUsageActionEnum {
    GetCoipPoolUsage = "GetCoipPoolUsage"
}
export declare enum PostGetCoipPoolUsageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetCoipPoolUsageQueryParams extends SpeakeasyBase {
    action: PostGetCoipPoolUsageActionEnum;
    version: PostGetCoipPoolUsageVersionEnum;
}
export declare class PostGetCoipPoolUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetCoipPoolUsageRequest extends SpeakeasyBase {
    queryParams: PostGetCoipPoolUsageQueryParams;
    headers: PostGetCoipPoolUsageHeaders;
    request?: Uint8Array;
}
export declare class PostGetCoipPoolUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
