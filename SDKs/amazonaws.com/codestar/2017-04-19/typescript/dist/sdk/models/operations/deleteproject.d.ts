import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteProjectXAmzTargetEnum {
    CodeStar20170419DeleteProject = "CodeStar_20170419.DeleteProject"
}
export declare class DeleteProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProjectXAmzTargetEnum;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    headers: DeleteProjectHeaders;
    request: shared.DeleteProjectRequest;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteProjectResult?: shared.DeleteProjectResult;
    invalidServiceRoleException?: any;
    statusCode: number;
    validationException?: any;
}
