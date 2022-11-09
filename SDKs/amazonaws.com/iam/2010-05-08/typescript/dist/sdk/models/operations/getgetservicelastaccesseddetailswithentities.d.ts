import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetServiceLastAccessedDetailsWithEntitiesActionEnum {
    GetServiceLastAccessedDetailsWithEntities = "GetServiceLastAccessedDetailsWithEntities"
}
export declare enum GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetServiceLastAccessedDetailsWithEntitiesQueryParams extends SpeakeasyBase {
    action: GetGetServiceLastAccessedDetailsWithEntitiesActionEnum;
    jobId: string;
    marker?: string;
    maxItems?: number;
    serviceNamespace: string;
    version: GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum;
}
export declare class GetGetServiceLastAccessedDetailsWithEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetServiceLastAccessedDetailsWithEntitiesRequest extends SpeakeasyBase {
    queryParams: GetGetServiceLastAccessedDetailsWithEntitiesQueryParams;
    headers: GetGetServiceLastAccessedDetailsWithEntitiesHeaders;
}
export declare class GetGetServiceLastAccessedDetailsWithEntitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
