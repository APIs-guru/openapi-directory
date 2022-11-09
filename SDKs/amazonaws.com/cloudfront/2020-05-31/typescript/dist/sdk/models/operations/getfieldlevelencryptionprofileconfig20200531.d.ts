import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetFieldLevelEncryptionProfileConfig20200531PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFieldLevelEncryptionProfileConfig20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFieldLevelEncryptionProfileConfig20200531Request extends SpeakeasyBase {
    pathParams: GetFieldLevelEncryptionProfileConfig20200531PathParams;
    headers: GetFieldLevelEncryptionProfileConfig20200531Headers;
}
export declare class GetFieldLevelEncryptionProfileConfig20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
