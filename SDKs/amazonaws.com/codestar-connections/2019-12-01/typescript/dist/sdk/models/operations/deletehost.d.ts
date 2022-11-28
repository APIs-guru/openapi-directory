import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost"
}
export declare class DeleteHostHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHostXAmzTargetEnum;
}
export declare class DeleteHostRequest extends SpeakeasyBase {
    headers: DeleteHostHeaders;
    request: shared.DeleteHostInput;
}
export declare class DeleteHostResponse extends SpeakeasyBase {
    contentType: string;
    deleteHostOutput?: Map<string, any>;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
