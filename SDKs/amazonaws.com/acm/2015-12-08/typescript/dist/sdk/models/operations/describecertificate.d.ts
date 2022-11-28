import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCertificateXAmzTargetEnum {
    CertificateManagerDescribeCertificate = "CertificateManager.DescribeCertificate"
}
export declare class DescribeCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificateXAmzTargetEnum;
}
export declare class DescribeCertificateRequest extends SpeakeasyBase {
    headers: DescribeCertificateHeaders;
    request: shared.DescribeCertificateRequest;
}
export declare class DescribeCertificateResponse extends SpeakeasyBase {
    contentType: string;
    describeCertificateResponse?: shared.DescribeCertificateResponse;
    invalidArnException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
