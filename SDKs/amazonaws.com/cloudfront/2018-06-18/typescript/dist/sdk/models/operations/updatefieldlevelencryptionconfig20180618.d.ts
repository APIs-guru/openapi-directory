import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateFieldLevelEncryptionConfig20180618PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateFieldLevelEncryptionConfig20180618Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFieldLevelEncryptionConfig20180618Request extends SpeakeasyBase {
    pathParams: UpdateFieldLevelEncryptionConfig20180618PathParams;
    headers: UpdateFieldLevelEncryptionConfig20180618Headers;
    request: Uint8Array;
}
export declare class UpdateFieldLevelEncryptionConfig20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
