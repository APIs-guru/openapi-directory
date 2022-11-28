import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBuildSuggestersActionEnum {
    BuildSuggesters = "BuildSuggesters"
}
export declare enum PostBuildSuggestersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostBuildSuggestersQueryParams extends SpeakeasyBase {
    action: PostBuildSuggestersActionEnum;
    version: PostBuildSuggestersVersionEnum;
}
export declare class PostBuildSuggestersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBuildSuggestersRequest extends SpeakeasyBase {
    queryParams: PostBuildSuggestersQueryParams;
    headers: PostBuildSuggestersHeaders;
    request?: Uint8Array;
}
export declare class PostBuildSuggestersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
