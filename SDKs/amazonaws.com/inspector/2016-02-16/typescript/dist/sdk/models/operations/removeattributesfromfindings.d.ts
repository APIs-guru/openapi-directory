import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveAttributesFromFindingsXAmzTargetEnum {
    InspectorServiceRemoveAttributesFromFindings = "InspectorService.RemoveAttributesFromFindings"
}
export declare class RemoveAttributesFromFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveAttributesFromFindingsXAmzTargetEnum;
}
export declare class RemoveAttributesFromFindingsRequest extends SpeakeasyBase {
    headers: RemoveAttributesFromFindingsHeaders;
    request: shared.RemoveAttributesFromFindingsRequest;
}
export declare class RemoveAttributesFromFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    removeAttributesFromFindingsResponse?: shared.RemoveAttributesFromFindingsResponse;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
