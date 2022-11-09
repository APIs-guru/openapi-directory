import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetBuildSuggestersActionEnum {
    BuildSuggesters = "BuildSuggesters"
}
export declare enum GetBuildSuggestersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetBuildSuggestersQueryParams extends SpeakeasyBase {
    action: GetBuildSuggestersActionEnum;
    domainName: string;
    version: GetBuildSuggestersVersionEnum;
}
export declare class GetBuildSuggestersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBuildSuggestersRequest extends SpeakeasyBase {
    queryParams: GetBuildSuggestersQueryParams;
    headers: GetBuildSuggestersHeaders;
}
export declare class GetBuildSuggestersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
