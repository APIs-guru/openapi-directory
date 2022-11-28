import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListFieldLevelEncryptionConfigs20190326QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListFieldLevelEncryptionConfigs20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFieldLevelEncryptionConfigs20190326Request extends SpeakeasyBase {
    queryParams: ListFieldLevelEncryptionConfigs20190326QueryParams;
    headers: ListFieldLevelEncryptionConfigs20190326Headers;
}
export declare class ListFieldLevelEncryptionConfigs20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
