import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLagXAmzTargetEnum {
    OvertureServiceUpdateLag = "OvertureService.UpdateLag"
}
export declare class UpdateLagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLagXAmzTargetEnum;
}
export declare class UpdateLagRequest extends SpeakeasyBase {
    headers: UpdateLagHeaders;
    request: shared.UpdateLagRequest;
}
export declare class UpdateLagResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    lag?: shared.Lag;
    statusCode: number;
}
