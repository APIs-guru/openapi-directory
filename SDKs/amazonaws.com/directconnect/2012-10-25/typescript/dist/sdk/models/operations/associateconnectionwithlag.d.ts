import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateConnectionWithLagXAmzTargetEnum {
    OvertureServiceAssociateConnectionWithLag = "OvertureService.AssociateConnectionWithLag"
}
export declare class AssociateConnectionWithLagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateConnectionWithLagXAmzTargetEnum;
}
export declare class AssociateConnectionWithLagRequest extends SpeakeasyBase {
    headers: AssociateConnectionWithLagHeaders;
    request: shared.AssociateConnectionWithLagRequest;
}
export declare class AssociateConnectionWithLagResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
