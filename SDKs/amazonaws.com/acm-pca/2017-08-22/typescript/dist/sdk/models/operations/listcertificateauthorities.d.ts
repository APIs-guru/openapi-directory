import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCertificateAuthoritiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCertificateAuthoritiesXAmzTargetEnum {
    AcmPrivateCaListCertificateAuthorities = "ACMPrivateCA.ListCertificateAuthorities"
}
export declare class ListCertificateAuthoritiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCertificateAuthoritiesXAmzTargetEnum;
}
export declare class ListCertificateAuthoritiesRequest extends SpeakeasyBase {
    queryParams: ListCertificateAuthoritiesQueryParams;
    headers: ListCertificateAuthoritiesHeaders;
    request: shared.ListCertificateAuthoritiesRequest;
}
export declare class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listCertificateAuthoritiesResponse?: shared.ListCertificateAuthoritiesResponse;
    statusCode: number;
}
