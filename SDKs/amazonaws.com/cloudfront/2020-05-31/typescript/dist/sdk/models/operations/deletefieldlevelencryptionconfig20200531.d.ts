import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFieldLevelEncryptionConfig20200531PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteFieldLevelEncryptionConfig20200531Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFieldLevelEncryptionConfig20200531Request extends SpeakeasyBase {
    pathParams: DeleteFieldLevelEncryptionConfig20200531PathParams;
    headers: DeleteFieldLevelEncryptionConfig20200531Headers;
}
export declare class DeleteFieldLevelEncryptionConfig20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
