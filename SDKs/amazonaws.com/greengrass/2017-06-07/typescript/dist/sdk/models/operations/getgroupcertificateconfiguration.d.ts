import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupCertificateConfigurationPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupCertificateConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGroupCertificateConfigurationRequest extends SpeakeasyBase {
    pathParams: GetGroupCertificateConfigurationPathParams;
    headers: GetGroupCertificateConfigurationHeaders;
}
export declare class GetGroupCertificateConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getGroupCertificateConfigurationResponse?: shared.GetGroupCertificateConfigurationResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
