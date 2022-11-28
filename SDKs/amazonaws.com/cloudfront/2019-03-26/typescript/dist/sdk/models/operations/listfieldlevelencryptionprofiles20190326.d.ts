import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListFieldLevelEncryptionProfiles20190326QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListFieldLevelEncryptionProfiles20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFieldLevelEncryptionProfiles20190326Request extends SpeakeasyBase {
    queryParams: ListFieldLevelEncryptionProfiles20190326QueryParams;
    headers: ListFieldLevelEncryptionProfiles20190326Headers;
}
export declare class ListFieldLevelEncryptionProfiles20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
