import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCompleteMigrationActionEnum {
    CompleteMigration = "CompleteMigration"
}
export declare enum GetCompleteMigrationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetCompleteMigrationQueryParams extends SpeakeasyBase {
    action: GetCompleteMigrationActionEnum;
    force?: boolean;
    replicationGroupId: string;
    version: GetCompleteMigrationVersionEnum;
}
export declare class GetCompleteMigrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCompleteMigrationRequest extends SpeakeasyBase {
    queryParams: GetCompleteMigrationQueryParams;
    headers: GetCompleteMigrationHeaders;
}
export declare class GetCompleteMigrationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
