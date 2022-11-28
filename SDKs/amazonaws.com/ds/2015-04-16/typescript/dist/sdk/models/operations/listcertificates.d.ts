import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListCertificatesXAmzTargetEnum {
    DirectoryService20150416ListCertificates = "DirectoryService_20150416.ListCertificates"
}
export declare class ListCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCertificatesXAmzTargetEnum;
}
export declare class ListCertificatesRequest extends SpeakeasyBase {
    headers: ListCertificatesHeaders;
    request: shared.ListCertificatesRequest;
}
export declare class ListCertificatesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listCertificatesResult?: shared.ListCertificatesResult;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
