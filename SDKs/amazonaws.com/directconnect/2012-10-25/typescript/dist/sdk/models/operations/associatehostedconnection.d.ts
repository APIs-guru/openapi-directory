import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateHostedConnectionXAmzTargetEnum {
    OvertureServiceAssociateHostedConnection = "OvertureService.AssociateHostedConnection"
}
export declare class AssociateHostedConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateHostedConnectionXAmzTargetEnum;
}
export declare class AssociateHostedConnectionRequest extends SpeakeasyBase {
    headers: AssociateHostedConnectionHeaders;
    request: shared.AssociateHostedConnectionRequest;
}
export declare class AssociateHostedConnectionResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
