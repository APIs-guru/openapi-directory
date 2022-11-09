import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteFieldLevelEncryptionConfig20181105PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteFieldLevelEncryptionConfig20181105Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFieldLevelEncryptionConfig20181105Request extends SpeakeasyBase {
    pathParams: DeleteFieldLevelEncryptionConfig20181105PathParams;
    headers: DeleteFieldLevelEncryptionConfig20181105Headers;
}
export declare class DeleteFieldLevelEncryptionConfig20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
