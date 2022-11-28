import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostStartMigrationActionEnum {
    StartMigration = "StartMigration"
}
export declare enum PostStartMigrationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostStartMigrationQueryParams extends SpeakeasyBase {
    action: PostStartMigrationActionEnum;
    version: PostStartMigrationVersionEnum;
}
export declare class PostStartMigrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartMigrationRequest extends SpeakeasyBase {
    queryParams: PostStartMigrationQueryParams;
    headers: PostStartMigrationHeaders;
    request?: Uint8Array;
}
export declare class PostStartMigrationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
