import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AllocateHostedConnectionXAmzTargetEnum {
    OvertureServiceAllocateHostedConnection = "OvertureService.AllocateHostedConnection"
}
export declare class AllocateHostedConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocateHostedConnectionXAmzTargetEnum;
}
export declare class AllocateHostedConnectionRequest extends SpeakeasyBase {
    headers: AllocateHostedConnectionHeaders;
    request: shared.AllocateHostedConnectionRequest;
}
export declare class AllocateHostedConnectionResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    duplicateTagKeysException?: any;
    statusCode: number;
    tooManyTagsException?: any;
}
