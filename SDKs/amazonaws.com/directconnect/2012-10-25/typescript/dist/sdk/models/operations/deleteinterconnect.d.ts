import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInterconnectXAmzTargetEnum {
    OvertureServiceDeleteInterconnect = "OvertureService.DeleteInterconnect"
}
export declare class DeleteInterconnectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInterconnectXAmzTargetEnum;
}
export declare class DeleteInterconnectRequest extends SpeakeasyBase {
    headers: DeleteInterconnectHeaders;
    request: shared.DeleteInterconnectRequest;
}
export declare class DeleteInterconnectResponse extends SpeakeasyBase {
    contentType: string;
    deleteInterconnectResponse?: shared.DeleteInterconnectResponse;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
