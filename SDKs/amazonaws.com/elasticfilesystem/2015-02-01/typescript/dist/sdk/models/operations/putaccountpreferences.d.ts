import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAccountPreferencesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutAccountPreferencesRequestBodyResourceIdTypeEnum {
    LongId = "LONG_ID",
    ShortId = "SHORT_ID"
}
export declare class PutAccountPreferencesRequestBody extends SpeakeasyBase {
    resourceIdType: PutAccountPreferencesRequestBodyResourceIdTypeEnum;
}
export declare class PutAccountPreferencesRequest extends SpeakeasyBase {
    headers: PutAccountPreferencesHeaders;
    request: PutAccountPreferencesRequestBody;
}
export declare class PutAccountPreferencesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    putAccountPreferencesResponse?: shared.PutAccountPreferencesResponse;
    statusCode: number;
}
