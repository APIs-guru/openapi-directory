import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateMacSecKeyXAmzTargetEnum {
    OvertureServiceAssociateMacSecKey = "OvertureService.AssociateMacSecKey"
}
export declare class AssociateMacSecKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateMacSecKeyXAmzTargetEnum;
}
export declare class AssociateMacSecKeyRequest extends SpeakeasyBase {
    headers: AssociateMacSecKeyHeaders;
    request: shared.AssociateMacSecKeyRequest;
}
export declare class AssociateMacSecKeyResponse extends SpeakeasyBase {
    associateMacSecKeyResponse?: shared.AssociateMacSecKeyResponse;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
