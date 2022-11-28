import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFieldLevelEncryptionProfile20180618PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFieldLevelEncryptionProfile20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFieldLevelEncryptionProfile20180618Request extends SpeakeasyBase {
    pathParams: GetFieldLevelEncryptionProfile20180618PathParams;
    headers: GetFieldLevelEncryptionProfile20180618Headers;
}
export declare class GetFieldLevelEncryptionProfile20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
