import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFieldLevelEncryptionConfig20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateFieldLevelEncryptionConfig20190326Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFieldLevelEncryptionConfig20190326Request extends SpeakeasyBase {
    pathParams: UpdateFieldLevelEncryptionConfig20190326PathParams;
    headers: UpdateFieldLevelEncryptionConfig20190326Headers;
    request: Uint8Array;
}
export declare class UpdateFieldLevelEncryptionConfig20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
