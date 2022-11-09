import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteImageBuilder = "PhotonAdminProxyService.DeleteImageBuilder"
}
export declare class DeleteImageBuilderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImageBuilderXAmzTargetEnum;
}
export declare class DeleteImageBuilderRequest extends SpeakeasyBase {
    headers: DeleteImageBuilderHeaders;
    request: shared.DeleteImageBuilderRequest;
}
export declare class DeleteImageBuilderResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteImageBuilderResult?: shared.DeleteImageBuilderResult;
    operationNotPermittedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
