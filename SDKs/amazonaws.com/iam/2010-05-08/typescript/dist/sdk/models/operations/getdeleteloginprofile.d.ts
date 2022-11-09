import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteLoginProfileActionEnum {
    DeleteLoginProfile = "DeleteLoginProfile"
}
export declare enum GetDeleteLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteLoginProfileQueryParams extends SpeakeasyBase {
    action: GetDeleteLoginProfileActionEnum;
    userName: string;
    version: GetDeleteLoginProfileVersionEnum;
}
export declare class GetDeleteLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLoginProfileRequest extends SpeakeasyBase {
    queryParams: GetDeleteLoginProfileQueryParams;
    headers: GetDeleteLoginProfileHeaders;
}
export declare class GetDeleteLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
