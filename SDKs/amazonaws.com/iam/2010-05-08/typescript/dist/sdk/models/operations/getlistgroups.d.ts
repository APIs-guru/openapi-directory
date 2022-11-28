import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListGroupsActionEnum {
    ListGroups = "ListGroups"
}
export declare enum GetListGroupsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListGroupsQueryParams extends SpeakeasyBase {
    action: GetListGroupsActionEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    version: GetListGroupsVersionEnum;
}
export declare class GetListGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListGroupsRequest extends SpeakeasyBase {
    queryParams: GetListGroupsQueryParams;
    headers: GetListGroupsHeaders;
}
export declare class GetListGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
