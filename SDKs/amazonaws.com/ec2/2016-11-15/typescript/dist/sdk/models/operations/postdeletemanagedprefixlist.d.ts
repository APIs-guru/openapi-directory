import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteManagedPrefixListActionEnum {
    DeleteManagedPrefixList = "DeleteManagedPrefixList"
}
export declare enum PostDeleteManagedPrefixListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteManagedPrefixListQueryParams extends SpeakeasyBase {
    action: PostDeleteManagedPrefixListActionEnum;
    version: PostDeleteManagedPrefixListVersionEnum;
}
export declare class PostDeleteManagedPrefixListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteManagedPrefixListRequest extends SpeakeasyBase {
    queryParams: PostDeleteManagedPrefixListQueryParams;
    headers: PostDeleteManagedPrefixListHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteManagedPrefixListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
