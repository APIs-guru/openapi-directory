import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHostXAmzTargetEnum {
    ComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost"
}
export declare class CreateHostHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHostXAmzTargetEnum;
}
export declare class CreateHostRequest extends SpeakeasyBase {
    headers: CreateHostHeaders;
    request: shared.CreateHostInput;
}
export declare class CreateHostResponse extends SpeakeasyBase {
    contentType: string;
    createHostOutput?: shared.CreateHostOutput;
    limitExceededException?: any;
    statusCode: number;
}
