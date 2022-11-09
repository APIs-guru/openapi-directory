import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListGroupCertificateAuthoritiesPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ListGroupCertificateAuthoritiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGroupCertificateAuthoritiesRequest extends SpeakeasyBase {
    pathParams: ListGroupCertificateAuthoritiesPathParams;
    headers: ListGroupCertificateAuthoritiesHeaders;
}
export declare class ListGroupCertificateAuthoritiesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listGroupCertificateAuthoritiesResponse?: shared.ListGroupCertificateAuthoritiesResponse;
    statusCode: number;
}
