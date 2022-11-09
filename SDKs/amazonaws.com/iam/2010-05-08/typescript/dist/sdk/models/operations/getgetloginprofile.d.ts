import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetLoginProfileActionEnum {
    GetLoginProfile = "GetLoginProfile"
}
export declare enum GetGetLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetLoginProfileQueryParams extends SpeakeasyBase {
    action: GetGetLoginProfileActionEnum;
    userName: string;
    version: GetGetLoginProfileVersionEnum;
}
export declare class GetGetLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetLoginProfileRequest extends SpeakeasyBase {
    queryParams: GetGetLoginProfileQueryParams;
    headers: GetGetLoginProfileHeaders;
}
export declare class GetGetLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
