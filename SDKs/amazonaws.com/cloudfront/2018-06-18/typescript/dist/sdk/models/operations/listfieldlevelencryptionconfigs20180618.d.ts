import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListFieldLevelEncryptionConfigs20180618QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListFieldLevelEncryptionConfigs20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFieldLevelEncryptionConfigs20180618Request extends SpeakeasyBase {
    queryParams: ListFieldLevelEncryptionConfigs20180618QueryParams;
    headers: ListFieldLevelEncryptionConfigs20180618Headers;
}
export declare class ListFieldLevelEncryptionConfigs20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
