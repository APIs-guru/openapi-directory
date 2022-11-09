import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSetSecurityGroupsActionEnum {
    SetSecurityGroups = "SetSecurityGroups"
}
export declare enum PostSetSecurityGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostSetSecurityGroupsQueryParams extends SpeakeasyBase {
    action: PostSetSecurityGroupsActionEnum;
    version: PostSetSecurityGroupsVersionEnum;
}
export declare class PostSetSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: PostSetSecurityGroupsQueryParams;
    headers: PostSetSecurityGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostSetSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
