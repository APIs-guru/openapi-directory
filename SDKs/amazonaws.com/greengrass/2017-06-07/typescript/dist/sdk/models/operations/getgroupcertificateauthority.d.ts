import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupCertificateAuthorityPathParams extends SpeakeasyBase {
    certificateAuthorityId: string;
    groupId: string;
}
export declare class GetGroupCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGroupCertificateAuthorityRequest extends SpeakeasyBase {
    pathParams: GetGroupCertificateAuthorityPathParams;
    headers: GetGroupCertificateAuthorityHeaders;
}
export declare class GetGroupCertificateAuthorityResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getGroupCertificateAuthorityResponse?: shared.GetGroupCertificateAuthorityResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
