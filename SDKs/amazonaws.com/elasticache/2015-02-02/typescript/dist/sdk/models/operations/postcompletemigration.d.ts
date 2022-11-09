import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCompleteMigrationActionEnum {
    CompleteMigration = "CompleteMigration"
}
export declare enum PostCompleteMigrationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostCompleteMigrationQueryParams extends SpeakeasyBase {
    action: PostCompleteMigrationActionEnum;
    version: PostCompleteMigrationVersionEnum;
}
export declare class PostCompleteMigrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCompleteMigrationRequest extends SpeakeasyBase {
    queryParams: PostCompleteMigrationQueryParams;
    headers: PostCompleteMigrationHeaders;
    request?: Uint8Array;
}
export declare class PostCompleteMigrationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
