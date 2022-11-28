import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceStopImageBuilder = "PhotonAdminProxyService.StopImageBuilder"
}
export declare class StopImageBuilderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopImageBuilderXAmzTargetEnum;
}
export declare class StopImageBuilderRequest extends SpeakeasyBase {
    headers: StopImageBuilderHeaders;
    request: shared.StopImageBuilderRequest;
}
export declare class StopImageBuilderResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    operationNotPermittedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopImageBuilderResult?: shared.StopImageBuilderResult;
}
