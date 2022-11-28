import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLagXAmzTargetEnum {
    OvertureServiceDeleteLag = "OvertureService.DeleteLag"
}
export declare class DeleteLagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLagXAmzTargetEnum;
}
export declare class DeleteLagRequest extends SpeakeasyBase {
    headers: DeleteLagHeaders;
    request: shared.DeleteLagRequest;
}
export declare class DeleteLagResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    lag?: shared.Lag;
    statusCode: number;
}
