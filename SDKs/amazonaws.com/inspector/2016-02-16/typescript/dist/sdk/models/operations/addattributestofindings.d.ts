import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddAttributesToFindingsXAmzTargetEnum {
    InspectorServiceAddAttributesToFindings = "InspectorService.AddAttributesToFindings"
}
export declare class AddAttributesToFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddAttributesToFindingsXAmzTargetEnum;
}
export declare class AddAttributesToFindingsRequest extends SpeakeasyBase {
    headers: AddAttributesToFindingsHeaders;
    request: shared.AddAttributesToFindingsRequest;
}
export declare class AddAttributesToFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    addAttributesToFindingsResponse?: shared.AddAttributesToFindingsResponse;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
