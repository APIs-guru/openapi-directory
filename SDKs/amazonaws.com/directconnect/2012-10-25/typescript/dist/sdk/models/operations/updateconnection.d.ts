import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateConnectionXAmzTargetEnum {
    OvertureServiceUpdateConnection = "OvertureService.UpdateConnection"
}
export declare class UpdateConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConnectionXAmzTargetEnum;
}
export declare class UpdateConnectionRequest extends SpeakeasyBase {
    headers: UpdateConnectionHeaders;
    request: shared.UpdateConnectionRequest;
}
export declare class UpdateConnectionResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
