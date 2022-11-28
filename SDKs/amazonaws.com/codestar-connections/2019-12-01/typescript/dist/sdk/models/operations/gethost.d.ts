import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost"
}
export declare class GetHostHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHostXAmzTargetEnum;
}
export declare class GetHostRequest extends SpeakeasyBase {
    headers: GetHostHeaders;
    request: shared.GetHostInput;
}
export declare class GetHostResponse extends SpeakeasyBase {
    contentType: string;
    getHostOutput?: shared.GetHostOutput;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
