import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRestoreManagedPrefixListVersionActionEnum {
    RestoreManagedPrefixListVersion = "RestoreManagedPrefixListVersion"
}
export declare enum GetRestoreManagedPrefixListVersionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetRestoreManagedPrefixListVersionQueryParams extends SpeakeasyBase {
    action: GetRestoreManagedPrefixListVersionActionEnum;
    currentVersion: number;
    dryRun?: boolean;
    prefixListId: string;
    previousVersion: number;
    version: GetRestoreManagedPrefixListVersionVersionEnum;
}
export declare class GetRestoreManagedPrefixListVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestoreManagedPrefixListVersionRequest extends SpeakeasyBase {
    queryParams: GetRestoreManagedPrefixListVersionQueryParams;
    headers: GetRestoreManagedPrefixListVersionHeaders;
}
export declare class GetRestoreManagedPrefixListVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
