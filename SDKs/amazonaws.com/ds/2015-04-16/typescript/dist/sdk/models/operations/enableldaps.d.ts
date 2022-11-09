import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum EnableLdapsxAmzTargetEnum {
    DirectoryService20150416EnableLdaps = "DirectoryService_20150416.EnableLDAPS"
}
export declare class EnableLdapsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableLdapsxAmzTargetEnum;
}
export declare class EnableLdapsRequest extends SpeakeasyBase {
    headers: EnableLdapsHeaders;
    request: shared.EnableLdapsRequest;
}
export declare class EnableLdapsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryDoesNotExistException?: any;
    directoryUnavailableException?: any;
    enableLdapsResult?: Map<string, any>;
    invalidLdapsStatusException?: any;
    invalidParameterException?: any;
    noAvailableCertificateException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
