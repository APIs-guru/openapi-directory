import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListFieldLevelEncryptionConfigs20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListFieldLevelEncryptionConfigs20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFieldLevelEncryptionConfigs20200531Request extends SpeakeasyBase {
    queryParams: ListFieldLevelEncryptionConfigs20200531QueryParams;
    headers: ListFieldLevelEncryptionConfigs20200531Headers;
}
export declare class ListFieldLevelEncryptionConfigs20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
