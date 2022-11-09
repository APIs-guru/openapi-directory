import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateCertificateOptionsXAmzTargetEnum {
    CertificateManagerUpdateCertificateOptions = "CertificateManager.UpdateCertificateOptions"
}
export declare class UpdateCertificateOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCertificateOptionsXAmzTargetEnum;
}
export declare class UpdateCertificateOptionsRequest extends SpeakeasyBase {
    headers: UpdateCertificateOptionsHeaders;
    request: shared.UpdateCertificateOptionsRequest;
}
export declare class UpdateCertificateOptionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    invalidStateException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
