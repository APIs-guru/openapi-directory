import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSwapEnvironmentCnamEsActionEnum {
    SwapEnvironmentCnamEs = "SwapEnvironmentCNAMEs"
}
export declare enum PostSwapEnvironmentCnamEsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSwapEnvironmentCnamEsQueryParams extends SpeakeasyBase {
    action: PostSwapEnvironmentCnamEsActionEnum;
    version: PostSwapEnvironmentCnamEsVersionEnum;
}
export declare class PostSwapEnvironmentCnamEsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSwapEnvironmentCnamEsRequest extends SpeakeasyBase {
    queryParams: PostSwapEnvironmentCnamEsQueryParams;
    headers: PostSwapEnvironmentCnamEsHeaders;
    request?: Uint8Array;
}
export declare class PostSwapEnvironmentCnamEsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
