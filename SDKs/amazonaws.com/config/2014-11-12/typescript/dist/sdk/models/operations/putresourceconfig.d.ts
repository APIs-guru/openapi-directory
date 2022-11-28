import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResourceConfigXAmzTargetEnum {
    StarlingDoveServicePutResourceConfig = "StarlingDoveService.PutResourceConfig"
}
export declare class PutResourceConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourceConfigXAmzTargetEnum;
}
export declare class PutResourceConfigRequest extends SpeakeasyBase {
    headers: PutResourceConfigHeaders;
    request: shared.PutResourceConfigRequest;
}
export declare class PutResourceConfigResponse extends SpeakeasyBase {
    contentType: string;
    insufficientPermissionsException?: any;
    maxActiveResourcesExceededException?: any;
    noRunningConfigurationRecorderException?: any;
    statusCode: number;
    validationException?: any;
}
