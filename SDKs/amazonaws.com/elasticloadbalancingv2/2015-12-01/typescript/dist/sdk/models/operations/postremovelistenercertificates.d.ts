import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemoveListenerCertificatesActionEnum {
    RemoveListenerCertificates = "RemoveListenerCertificates"
}
export declare enum PostRemoveListenerCertificatesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostRemoveListenerCertificatesQueryParams extends SpeakeasyBase {
    action: PostRemoveListenerCertificatesActionEnum;
    version: PostRemoveListenerCertificatesVersionEnum;
}
export declare class PostRemoveListenerCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveListenerCertificatesRequest extends SpeakeasyBase {
    queryParams: PostRemoveListenerCertificatesQueryParams;
    headers: PostRemoveListenerCertificatesHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveListenerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
