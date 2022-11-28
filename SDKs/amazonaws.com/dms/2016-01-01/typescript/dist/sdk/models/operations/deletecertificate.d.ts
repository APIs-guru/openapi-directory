import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCertificateXAmzTargetEnum {
    AmazonDmSv20160101DeleteCertificate = "AmazonDMSv20160101.DeleteCertificate"
}
export declare class DeleteCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCertificateXAmzTargetEnum;
}
export declare class DeleteCertificateRequest extends SpeakeasyBase {
    headers: DeleteCertificateHeaders;
    request: shared.DeleteCertificateMessage;
}
export declare class DeleteCertificateResponse extends SpeakeasyBase {
    contentType: string;
    deleteCertificateResponse?: shared.DeleteCertificateResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
