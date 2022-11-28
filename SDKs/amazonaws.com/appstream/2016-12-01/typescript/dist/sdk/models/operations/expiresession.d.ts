import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExpireSessionXAmzTargetEnum {
    PhotonAdminProxyServiceExpireSession = "PhotonAdminProxyService.ExpireSession"
}
export declare class ExpireSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExpireSessionXAmzTargetEnum;
}
export declare class ExpireSessionRequest extends SpeakeasyBase {
    headers: ExpireSessionHeaders;
    request: shared.ExpireSessionRequest;
}
export declare class ExpireSessionResponse extends SpeakeasyBase {
    contentType: string;
    expireSessionResult?: Map<string, any>;
    statusCode: number;
}
