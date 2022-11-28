import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupVersionPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateGroupVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateGroupVersionRequestBody extends SpeakeasyBase {
    connectorDefinitionVersionArn?: string;
    coreDefinitionVersionArn?: string;
    deviceDefinitionVersionArn?: string;
    functionDefinitionVersionArn?: string;
    loggerDefinitionVersionArn?: string;
    resourceDefinitionVersionArn?: string;
    subscriptionDefinitionVersionArn?: string;
}
export declare class CreateGroupVersionRequest extends SpeakeasyBase {
    pathParams: CreateGroupVersionPathParams;
    headers: CreateGroupVersionHeaders;
    request: CreateGroupVersionRequestBody;
}
export declare class CreateGroupVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createGroupVersionResponse?: shared.CreateGroupVersionResponse;
    statusCode: number;
}
