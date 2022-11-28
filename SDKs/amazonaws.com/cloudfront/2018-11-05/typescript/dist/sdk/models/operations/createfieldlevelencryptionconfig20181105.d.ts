import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateFieldLevelEncryptionConfig20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFieldLevelEncryptionConfig20181105Request extends SpeakeasyBase {
    headers: CreateFieldLevelEncryptionConfig20181105Headers;
    request: Uint8Array;
}
export declare class CreateFieldLevelEncryptionConfig20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
