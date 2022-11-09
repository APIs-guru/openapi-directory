import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListCertificatesQueryParams extends SpeakeasyBase {
    maxItems?: string;
    nextToken?: string;
}
export declare enum ListCertificatesXAmzTargetEnum {
    CertificateManagerListCertificates = "CertificateManager.ListCertificates"
}
export declare class ListCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCertificatesXAmzTargetEnum;
}
export declare class ListCertificatesRequest extends SpeakeasyBase {
    queryParams: ListCertificatesQueryParams;
    headers: ListCertificatesHeaders;
    request: shared.ListCertificatesRequest;
}
export declare class ListCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    invalidArgsException?: any;
    listCertificatesResponse?: shared.ListCertificatesResponse;
    statusCode: number;
}
