import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateConnectionXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection"
}
export declare class CreateConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    headers: CreateConnectionHeaders;
    request: shared.CreateConnectionInput;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    contentType: string;
    createConnectionOutput?: shared.CreateConnectionOutput;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
