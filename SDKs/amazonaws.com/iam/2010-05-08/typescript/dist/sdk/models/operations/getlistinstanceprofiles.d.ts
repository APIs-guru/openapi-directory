import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListInstanceProfilesActionEnum {
    ListInstanceProfiles = "ListInstanceProfiles"
}
export declare enum GetListInstanceProfilesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListInstanceProfilesQueryParams extends SpeakeasyBase {
    action: GetListInstanceProfilesActionEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    version: GetListInstanceProfilesVersionEnum;
}
export declare class GetListInstanceProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListInstanceProfilesRequest extends SpeakeasyBase {
    queryParams: GetListInstanceProfilesQueryParams;
    headers: GetListInstanceProfilesHeaders;
}
export declare class GetListInstanceProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
