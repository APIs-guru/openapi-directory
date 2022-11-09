import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSetSecurityTokenServicePreferencesActionEnum {
    SetSecurityTokenServicePreferences = "SetSecurityTokenServicePreferences"
}
export declare enum PostSetSecurityTokenServicePreferencesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostSetSecurityTokenServicePreferencesQueryParams extends SpeakeasyBase {
    action: PostSetSecurityTokenServicePreferencesActionEnum;
    version: PostSetSecurityTokenServicePreferencesVersionEnum;
}
export declare class PostSetSecurityTokenServicePreferencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetSecurityTokenServicePreferencesRequest extends SpeakeasyBase {
    queryParams: PostSetSecurityTokenServicePreferencesQueryParams;
    headers: PostSetSecurityTokenServicePreferencesHeaders;
    request?: Uint8Array;
}
export declare class PostSetSecurityTokenServicePreferencesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
