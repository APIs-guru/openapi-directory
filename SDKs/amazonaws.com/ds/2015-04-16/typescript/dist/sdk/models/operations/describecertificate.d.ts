import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCertificateXAmzTargetEnum {
    DirectoryService20150416DescribeCertificate = "DirectoryService_20150416.DescribeCertificate"
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
    certificateDoesNotExistException?: any;
    clientException?: any;
    contentType: string;
    describeCertificateResult?: shared.DescribeCertificateResult;
    directoryDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
