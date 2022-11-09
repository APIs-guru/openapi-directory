import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListRolesActionEnum {
    ListRoles = "ListRoles"
}
export declare enum GetListRolesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListRolesQueryParams extends SpeakeasyBase {
    action: GetListRolesActionEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    version: GetListRolesVersionEnum;
}
export declare class GetListRolesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListRolesRequest extends SpeakeasyBase {
    queryParams: GetListRolesQueryParams;
    headers: GetListRolesHeaders;
}
export declare class GetListRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
