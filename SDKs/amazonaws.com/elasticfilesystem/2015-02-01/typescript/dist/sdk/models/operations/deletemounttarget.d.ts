import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMountTargetPathParams extends SpeakeasyBase {
    mountTargetId: string;
}
export declare class DeleteMountTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMountTargetRequest extends SpeakeasyBase {
    pathParams: DeleteMountTargetPathParams;
    headers: DeleteMountTargetHeaders;
}
export declare class DeleteMountTargetResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    dependencyTimeout?: any;
    internalServerError?: any;
    mountTargetNotFound?: any;
    statusCode: number;
}
