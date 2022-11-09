import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RemoveRegionXAmzTargetEnum {
    DirectoryService20150416RemoveRegion = "DirectoryService_20150416.RemoveRegion"
}
export declare class RemoveRegionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveRegionXAmzTargetEnum;
}
export declare class RemoveRegionRequest extends SpeakeasyBase {
    headers: RemoveRegionHeaders;
    request: shared.RemoveRegionRequest;
}
export declare class RemoveRegionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    directoryDoesNotExistException?: any;
    directoryUnavailableException?: any;
    removeRegionResult?: Map<string, any>;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
