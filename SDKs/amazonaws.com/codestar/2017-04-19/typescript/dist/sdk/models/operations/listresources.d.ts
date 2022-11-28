import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListResourcesXAmzTargetEnum {
    CodeStar20170419ListResources = "CodeStar_20170419.ListResources"
}
export declare class ListResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourcesXAmzTargetEnum;
}
export declare class ListResourcesRequest extends SpeakeasyBase {
    headers: ListResourcesHeaders;
    request: shared.ListResourcesRequest;
}
export declare class ListResourcesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listResourcesResult?: shared.ListResourcesResult;
    projectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
