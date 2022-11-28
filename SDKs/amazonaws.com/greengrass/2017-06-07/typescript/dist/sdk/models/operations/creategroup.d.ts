import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
/**
 * Information about a group version.
**/
export declare class CreateGroupRequestBodyInitialVersion extends SpeakeasyBase {
    connectorDefinitionVersionArn?: string;
    coreDefinitionVersionArn?: string;
    deviceDefinitionVersionArn?: string;
    functionDefinitionVersionArn?: string;
    loggerDefinitionVersionArn?: string;
    resourceDefinitionVersionArn?: string;
    subscriptionDefinitionVersionArn?: string;
}
export declare class CreateGroupRequestBody extends SpeakeasyBase {
    initialVersion?: CreateGroupRequestBodyInitialVersion;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    headers: CreateGroupHeaders;
    request: CreateGroupRequestBody;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createGroupResponse?: shared.CreateGroupResponse;
    statusCode: number;
}
