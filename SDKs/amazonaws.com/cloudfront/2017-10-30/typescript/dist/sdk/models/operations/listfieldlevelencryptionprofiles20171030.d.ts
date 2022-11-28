import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListFieldLevelEncryptionProfiles20171030QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListFieldLevelEncryptionProfiles20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFieldLevelEncryptionProfiles20171030Request extends SpeakeasyBase {
    queryParams: ListFieldLevelEncryptionProfiles20171030QueryParams;
    headers: ListFieldLevelEncryptionProfiles20171030Headers;
}
export declare class ListFieldLevelEncryptionProfiles20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
