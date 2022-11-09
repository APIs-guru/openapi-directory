import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteProjectPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class DeleteProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    pathParams: DeleteProjectPathParams;
    headers: DeleteProjectHeaders;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    deleteProjectResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
