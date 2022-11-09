import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateGroupCertificateConfigurationPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class UpdateGroupCertificateConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGroupCertificateConfigurationRequestBody extends SpeakeasyBase {
    certificateExpiryInMilliseconds?: string;
}
export declare class UpdateGroupCertificateConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateGroupCertificateConfigurationPathParams;
    headers: UpdateGroupCertificateConfigurationHeaders;
    request: UpdateGroupCertificateConfigurationRequestBody;
}
export declare class UpdateGroupCertificateConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServerErrorException?: any;
    statusCode: number;
    updateGroupCertificateConfigurationResponse?: shared.UpdateGroupCertificateConfigurationResponse;
}
