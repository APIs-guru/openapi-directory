import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRestoreManagedPrefixListVersionActionEnum {
    RestoreManagedPrefixListVersion = "RestoreManagedPrefixListVersion"
}
export declare enum PostRestoreManagedPrefixListVersionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRestoreManagedPrefixListVersionQueryParams extends SpeakeasyBase {
    action: PostRestoreManagedPrefixListVersionActionEnum;
    version: PostRestoreManagedPrefixListVersionVersionEnum;
}
export declare class PostRestoreManagedPrefixListVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreManagedPrefixListVersionRequest extends SpeakeasyBase {
    queryParams: PostRestoreManagedPrefixListVersionQueryParams;
    headers: PostRestoreManagedPrefixListVersionHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreManagedPrefixListVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
