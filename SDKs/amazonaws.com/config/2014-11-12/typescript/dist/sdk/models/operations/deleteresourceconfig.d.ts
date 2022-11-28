import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourceConfigXAmzTargetEnum {
    StarlingDoveServiceDeleteResourceConfig = "StarlingDoveService.DeleteResourceConfig"
}
export declare class DeleteResourceConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceConfigXAmzTargetEnum;
}
export declare class DeleteResourceConfigRequest extends SpeakeasyBase {
    headers: DeleteResourceConfigHeaders;
    request: shared.DeleteResourceConfigRequest;
}
export declare class DeleteResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    noRunningConfigurationRecorderException?: any;
    statusCode: number;
    validationException?: any;
}
