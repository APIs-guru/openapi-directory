import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateManagedPrefixListActionEnum {
    CreateManagedPrefixList = "CreateManagedPrefixList"
}
export declare enum PostCreateManagedPrefixListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateManagedPrefixListQueryParams extends SpeakeasyBase {
    action: PostCreateManagedPrefixListActionEnum;
    version: PostCreateManagedPrefixListVersionEnum;
}
export declare class PostCreateManagedPrefixListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateManagedPrefixListRequest extends SpeakeasyBase {
    queryParams: PostCreateManagedPrefixListQueryParams;
    headers: PostCreateManagedPrefixListHeaders;
    request?: Uint8Array;
}
export declare class PostCreateManagedPrefixListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
