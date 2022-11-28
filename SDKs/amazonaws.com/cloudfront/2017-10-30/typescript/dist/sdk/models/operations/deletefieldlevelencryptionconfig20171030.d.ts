import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFieldLevelEncryptionConfig20171030PathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteFieldLevelEncryptionConfig20171030Headers extends SpeakeasyBase {
    ifMatch?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFieldLevelEncryptionConfig20171030Request extends SpeakeasyBase {
    pathParams: DeleteFieldLevelEncryptionConfig20171030PathParams;
    headers: DeleteFieldLevelEncryptionConfig20171030Headers;
}
export declare class DeleteFieldLevelEncryptionConfig20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
