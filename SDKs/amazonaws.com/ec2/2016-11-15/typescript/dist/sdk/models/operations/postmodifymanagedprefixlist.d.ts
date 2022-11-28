import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyManagedPrefixListActionEnum {
    ModifyManagedPrefixList = "ModifyManagedPrefixList"
}
export declare enum PostModifyManagedPrefixListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyManagedPrefixListQueryParams extends SpeakeasyBase {
    action: PostModifyManagedPrefixListActionEnum;
    version: PostModifyManagedPrefixListVersionEnum;
}
export declare class PostModifyManagedPrefixListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyManagedPrefixListRequest extends SpeakeasyBase {
    queryParams: PostModifyManagedPrefixListQueryParams;
    headers: PostModifyManagedPrefixListHeaders;
    request?: Uint8Array;
}
export declare class PostModifyManagedPrefixListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
