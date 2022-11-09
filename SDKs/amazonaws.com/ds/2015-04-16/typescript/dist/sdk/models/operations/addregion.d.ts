import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddRegionXAmzTargetEnum {
    DirectoryService20150416AddRegion = "DirectoryService_20150416.AddRegion"
}
export declare class AddRegionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddRegionXAmzTargetEnum;
}
export declare class AddRegionRequest extends SpeakeasyBase {
    headers: AddRegionHeaders;
    request: shared.AddRegionRequest;
}
export declare class AddRegionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    addRegionResult?: Map<string, any>;
    clientException?: any;
    contentType: string;
    directoryAlreadyInRegionException?: any;
    directoryDoesNotExistException?: any;
    directoryUnavailableException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    regionLimitExceededException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
