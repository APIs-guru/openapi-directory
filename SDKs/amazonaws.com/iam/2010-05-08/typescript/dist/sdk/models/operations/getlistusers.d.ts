import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListUsersActionEnum {
    ListUsers = "ListUsers"
}
export declare enum GetListUsersVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListUsersQueryParams extends SpeakeasyBase {
    action: GetListUsersActionEnum;
    marker?: string;
    maxItems?: number;
    pathPrefix?: string;
    version: GetListUsersVersionEnum;
}
export declare class GetListUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListUsersRequest extends SpeakeasyBase {
    queryParams: GetListUsersQueryParams;
    headers: GetListUsersHeaders;
}
export declare class GetListUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
