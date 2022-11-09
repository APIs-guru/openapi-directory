import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteConnectionXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnection = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection"
}
export declare class DeleteConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConnectionXAmzTargetEnum;
}
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    headers: DeleteConnectionHeaders;
    request: shared.DeleteConnectionInput;
}
export declare class DeleteConnectionResponse extends SpeakeasyBase {
    contentType: string;
    deleteConnectionOutput?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
