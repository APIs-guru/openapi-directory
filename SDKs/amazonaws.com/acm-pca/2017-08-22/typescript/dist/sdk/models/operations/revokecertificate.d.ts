import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RevokeCertificateXAmzTargetEnum {
    AcmPrivateCaRevokeCertificate = "ACMPrivateCA.RevokeCertificate"
}
export declare class RevokeCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokeCertificateXAmzTargetEnum;
}
export declare class RevokeCertificateRequest extends SpeakeasyBase {
    headers: RevokeCertificateHeaders;
    request: shared.RevokeCertificateRequest;
}
export declare class RevokeCertificateResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArnException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    limitExceededException?: any;
    requestAlreadyProcessedException?: any;
    requestFailedException?: any;
    requestInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
