import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableLdapsxAmzTargetEnum {
    DirectoryService20150416DisableLdaps = "DirectoryService_20150416.DisableLDAPS"
}
export declare class DisableLdapsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableLdapsxAmzTargetEnum;
}
export declare class DisableLdapsRequest extends SpeakeasyBase {
    headers: DisableLdapsHeaders;
    request: shared.DisableLdapsRequest;
}
export declare class DisableLdapsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryDoesNotExistException?: any;
    directoryUnavailableException?: any;
    disableLdapsResult?: Map<string, any>;
    invalidLdapsStatusException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
