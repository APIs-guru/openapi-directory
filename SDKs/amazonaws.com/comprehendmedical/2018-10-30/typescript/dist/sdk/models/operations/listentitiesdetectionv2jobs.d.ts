import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListEntitiesDetectionV2JobsXAmzTargetEnum {
    ComprehendMedical20181030ListEntitiesDetectionV2Jobs = "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs"
}
export declare class ListEntitiesDetectionV2JobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEntitiesDetectionV2JobsXAmzTargetEnum;
}
export declare class ListEntitiesDetectionV2JobsRequest extends SpeakeasyBase {
    headers: ListEntitiesDetectionV2JobsHeaders;
    request: shared.ListEntitiesDetectionV2JobsRequest;
}
export declare class ListEntitiesDetectionV2JobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listEntitiesDetectionV2JobsResponse?: shared.ListEntitiesDetectionV2JobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
