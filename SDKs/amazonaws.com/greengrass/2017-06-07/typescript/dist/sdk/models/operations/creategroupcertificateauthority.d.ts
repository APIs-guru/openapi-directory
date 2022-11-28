import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupCertificateAuthorityPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateGroupCertificateAuthorityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateGroupCertificateAuthorityRequest extends SpeakeasyBase {
    pathParams: CreateGroupCertificateAuthorityPathParams;
    headers: CreateGroupCertificateAuthorityHeaders;
}
export declare class CreateGroupCertificateAuthorityResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createGroupCertificateAuthorityResponse?: shared.CreateGroupCertificateAuthorityResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
