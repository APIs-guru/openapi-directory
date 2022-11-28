import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetConnectionXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnection = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection"
}
export declare class GetConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectionXAmzTargetEnum;
}
export declare class GetConnectionRequest extends SpeakeasyBase {
    headers: GetConnectionHeaders;
    request: shared.GetConnectionInput;
}
export declare class GetConnectionResponse extends SpeakeasyBase {
    contentType: string;
    getConnectionOutput?: shared.GetConnectionOutput;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
