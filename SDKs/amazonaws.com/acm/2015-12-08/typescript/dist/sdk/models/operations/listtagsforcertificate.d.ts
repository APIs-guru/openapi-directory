import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListTagsForCertificateXAmzTargetEnum {
    CertificateManagerListTagsForCertificate = "CertificateManager.ListTagsForCertificate"
}
export declare class ListTagsForCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForCertificateXAmzTargetEnum;
}
export declare class ListTagsForCertificateRequest extends SpeakeasyBase {
    headers: ListTagsForCertificateHeaders;
    request: shared.ListTagsForCertificateRequest;
}
export declare class ListTagsForCertificateResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    listTagsForCertificateResponse?: shared.ListTagsForCertificateResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
