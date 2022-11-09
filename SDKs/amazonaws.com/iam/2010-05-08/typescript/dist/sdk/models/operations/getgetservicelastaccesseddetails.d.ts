import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetServiceLastAccessedDetailsActionEnum {
    GetServiceLastAccessedDetails = "GetServiceLastAccessedDetails"
}
export declare enum GetGetServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
    action: GetGetServiceLastAccessedDetailsActionEnum;
    jobId: string;
    marker?: string;
    maxItems?: number;
    version: GetGetServiceLastAccessedDetailsVersionEnum;
}
export declare class GetGetServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetServiceLastAccessedDetailsRequest extends SpeakeasyBase {
    queryParams: GetGetServiceLastAccessedDetailsQueryParams;
    headers: GetGetServiceLastAccessedDetailsHeaders;
}
export declare class GetGetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
