import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost"
}
export declare class UpdateHostHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHostXAmzTargetEnum;
}
export declare class UpdateHostRequest extends SpeakeasyBase {
    headers: UpdateHostHeaders;
    request: shared.UpdateHostInput;
}
export declare class UpdateHostResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    updateHostOutput?: Map<string, any>;
}
