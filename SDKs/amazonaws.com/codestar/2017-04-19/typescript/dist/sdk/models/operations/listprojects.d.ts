import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListProjectsXAmzTargetEnum {
    CodeStar20170419ListProjects = "CodeStar_20170419.ListProjects"
}
export declare class ListProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProjectsXAmzTargetEnum;
}
export declare class ListProjectsRequest extends SpeakeasyBase {
    headers: ListProjectsHeaders;
    request: shared.ListProjectsRequest;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listProjectsResult?: shared.ListProjectsResult;
    statusCode: number;
    validationException?: any;
}
