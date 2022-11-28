import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetTagsForResourceXAmzTargetEnum {
    InspectorServiceSetTagsForResource = "InspectorService.SetTagsForResource"
}
export declare class SetTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTagsForResourceXAmzTargetEnum;
}
export declare class SetTagsForResourceRequest extends SpeakeasyBase {
    headers: SetTagsForResourceHeaders;
    request: shared.SetTagsForResourceRequest;
}
export declare class SetTagsForResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
