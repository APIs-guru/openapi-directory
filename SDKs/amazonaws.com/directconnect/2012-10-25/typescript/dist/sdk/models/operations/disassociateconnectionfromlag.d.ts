import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateConnectionFromLagXAmzTargetEnum {
    OvertureServiceDisassociateConnectionFromLag = "OvertureService.DisassociateConnectionFromLag"
}
export declare class DisassociateConnectionFromLagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateConnectionFromLagXAmzTargetEnum;
}
export declare class DisassociateConnectionFromLagRequest extends SpeakeasyBase {
    headers: DisassociateConnectionFromLagHeaders;
    request: shared.DisassociateConnectionFromLagRequest;
}
export declare class DisassociateConnectionFromLagResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
