import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateMacSecKeyXAmzTargetEnum {
    OvertureServiceDisassociateMacSecKey = "OvertureService.DisassociateMacSecKey"
}
export declare class DisassociateMacSecKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateMacSecKeyXAmzTargetEnum;
}
export declare class DisassociateMacSecKeyRequest extends SpeakeasyBase {
    headers: DisassociateMacSecKeyHeaders;
    request: shared.DisassociateMacSecKeyRequest;
}
export declare class DisassociateMacSecKeyResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    disassociateMacSecKeyResponse?: shared.DisassociateMacSecKeyResponse;
    statusCode: number;
}
