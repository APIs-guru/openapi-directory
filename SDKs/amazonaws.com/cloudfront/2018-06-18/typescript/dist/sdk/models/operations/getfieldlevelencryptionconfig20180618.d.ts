import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetFieldLevelEncryptionConfig20180618PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFieldLevelEncryptionConfig20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFieldLevelEncryptionConfig20180618Request extends SpeakeasyBase {
    pathParams: GetFieldLevelEncryptionConfig20180618PathParams;
    headers: GetFieldLevelEncryptionConfig20180618Headers;
}
export declare class GetFieldLevelEncryptionConfig20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
