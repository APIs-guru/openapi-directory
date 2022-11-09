import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListConflictingAliases20200531QueryParams extends SpeakeasyBase {
    alias: string;
    distributionId: string;
    marker?: string;
    maxItems?: number;
}
export declare class ListConflictingAliases20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConflictingAliases20200531Request extends SpeakeasyBase {
    queryParams: ListConflictingAliases20200531QueryParams;
    headers: ListConflictingAliases20200531Headers;
}
export declare class ListConflictingAliases20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
