import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteManagedPrefixListActionEnum {
    DeleteManagedPrefixList = "DeleteManagedPrefixList"
}
export declare enum GetDeleteManagedPrefixListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteManagedPrefixListQueryParams extends SpeakeasyBase {
    action: GetDeleteManagedPrefixListActionEnum;
    dryRun?: boolean;
    prefixListId: string;
    version: GetDeleteManagedPrefixListVersionEnum;
}
export declare class GetDeleteManagedPrefixListHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteManagedPrefixListRequest extends SpeakeasyBase {
    queryParams: GetDeleteManagedPrefixListQueryParams;
    headers: GetDeleteManagedPrefixListHeaders;
}
export declare class GetDeleteManagedPrefixListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
