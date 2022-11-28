import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConfirmConnectionXAmzTargetEnum {
    OvertureServiceConfirmConnection = "OvertureService.ConfirmConnection"
}
export declare class ConfirmConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmConnectionXAmzTargetEnum;
}
export declare class ConfirmConnectionRequest extends SpeakeasyBase {
    headers: ConfirmConnectionHeaders;
    request: shared.ConfirmConnectionRequest;
}
export declare class ConfirmConnectionResponse extends SpeakeasyBase {
    confirmConnectionResponse?: shared.ConfirmConnectionResponse;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
