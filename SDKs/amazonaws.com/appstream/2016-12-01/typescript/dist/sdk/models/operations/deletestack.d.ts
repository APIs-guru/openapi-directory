import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStackXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteStack = "PhotonAdminProxyService.DeleteStack"
}
export declare class DeleteStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStackXAmzTargetEnum;
}
export declare class DeleteStackRequest extends SpeakeasyBase {
    headers: DeleteStackHeaders;
    request: shared.DeleteStackRequest;
}
export declare class DeleteStackResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteStackResult?: Map<string, any>;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
