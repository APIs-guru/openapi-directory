import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResource = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceInput;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagResourceOutput?: Map<string, any>;
}
