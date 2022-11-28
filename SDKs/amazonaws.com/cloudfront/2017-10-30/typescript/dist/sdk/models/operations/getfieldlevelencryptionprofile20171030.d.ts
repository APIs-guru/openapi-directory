import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFieldLevelEncryptionProfile20171030PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFieldLevelEncryptionProfile20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFieldLevelEncryptionProfile20171030Request extends SpeakeasyBase {
    pathParams: GetFieldLevelEncryptionProfile20171030PathParams;
    headers: GetFieldLevelEncryptionProfile20171030Headers;
}
export declare class GetFieldLevelEncryptionProfile20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
