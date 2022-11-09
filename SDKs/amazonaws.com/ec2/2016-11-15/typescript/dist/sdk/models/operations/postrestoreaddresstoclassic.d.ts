import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRestoreAddressToClassicActionEnum {
    RestoreAddressToClassic = "RestoreAddressToClassic"
}
export declare enum PostRestoreAddressToClassicVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRestoreAddressToClassicQueryParams extends SpeakeasyBase {
    action: PostRestoreAddressToClassicActionEnum;
    version: PostRestoreAddressToClassicVersionEnum;
}
export declare class PostRestoreAddressToClassicHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreAddressToClassicRequest extends SpeakeasyBase {
    queryParams: PostRestoreAddressToClassicQueryParams;
    headers: PostRestoreAddressToClassicHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreAddressToClassicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
