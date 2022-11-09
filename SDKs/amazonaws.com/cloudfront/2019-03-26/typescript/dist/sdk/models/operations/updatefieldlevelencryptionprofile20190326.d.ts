import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateFieldLevelEncryptionProfile20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateFieldLevelEncryptionProfile20190326Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFieldLevelEncryptionProfile20190326Request extends SpeakeasyBase {
    pathParams: UpdateFieldLevelEncryptionProfile20190326PathParams;
    headers: UpdateFieldLevelEncryptionProfile20190326Headers;
    request: Uint8Array;
}
export declare class UpdateFieldLevelEncryptionProfile20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
