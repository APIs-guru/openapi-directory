import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFieldLevelEncryptionProfileConfig20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFieldLevelEncryptionProfileConfig20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFieldLevelEncryptionProfileConfig20190326Request extends SpeakeasyBase {
    pathParams: GetFieldLevelEncryptionProfileConfig20190326PathParams;
    headers: GetFieldLevelEncryptionProfileConfig20190326Headers;
}
export declare class GetFieldLevelEncryptionProfileConfig20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
