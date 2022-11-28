import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetServiceLastAccessedDetailsWithEntitiesActionEnum {
    GetServiceLastAccessedDetailsWithEntities = "GetServiceLastAccessedDetailsWithEntities"
}
export declare enum PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetServiceLastAccessedDetailsWithEntitiesQueryParams extends SpeakeasyBase {
    action: PostGetServiceLastAccessedDetailsWithEntitiesActionEnum;
    version: PostGetServiceLastAccessedDetailsWithEntitiesVersionEnum;
}
export declare class PostGetServiceLastAccessedDetailsWithEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetServiceLastAccessedDetailsWithEntitiesRequest extends SpeakeasyBase {
    queryParams: PostGetServiceLastAccessedDetailsWithEntitiesQueryParams;
    headers: PostGetServiceLastAccessedDetailsWithEntitiesHeaders;
    request?: Uint8Array;
}
export declare class PostGetServiceLastAccessedDetailsWithEntitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
