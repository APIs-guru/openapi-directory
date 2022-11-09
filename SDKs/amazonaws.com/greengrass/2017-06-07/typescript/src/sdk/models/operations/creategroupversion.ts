import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class CreateGroupVersionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class CreateGroupVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectorDefinitionVersionArn" })
  connectorDefinitionVersionArn?: string;

  @Metadata({ data: "json, name=CoreDefinitionVersionArn" })
  coreDefinitionVersionArn?: string;

  @Metadata({ data: "json, name=DeviceDefinitionVersionArn" })
  deviceDefinitionVersionArn?: string;

  @Metadata({ data: "json, name=FunctionDefinitionVersionArn" })
  functionDefinitionVersionArn?: string;

  @Metadata({ data: "json, name=LoggerDefinitionVersionArn" })
  loggerDefinitionVersionArn?: string;

  @Metadata({ data: "json, name=ResourceDefinitionVersionArn" })
  resourceDefinitionVersionArn?: string;

  @Metadata({ data: "json, name=SubscriptionDefinitionVersionArn" })
  subscriptionDefinitionVersionArn?: string;
}


export class CreateGroupVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateGroupVersionPathParams;

  @Metadata()
  headers: CreateGroupVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateGroupVersionRequestBody;
}


export class CreateGroupVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createGroupVersionResponse?: shared.CreateGroupVersionResponse;

  @Metadata()
  statusCode: number;
}
