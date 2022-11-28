import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGroupVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class CreateGroupVersionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class CreateGroupVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectorDefinitionVersionArn" })
  connectorDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CoreDefinitionVersionArn" })
  coreDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceDefinitionVersionArn" })
  deviceDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionDefinitionVersionArn" })
  functionDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggerDefinitionVersionArn" })
  loggerDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceDefinitionVersionArn" })
  resourceDefinitionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionDefinitionVersionArn" })
  subscriptionDefinitionVersionArn?: string;
}


export class CreateGroupVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateGroupVersionPathParams;

  @SpeakeasyMetadata()
  headers: CreateGroupVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGroupVersionRequestBody;
}


export class CreateGroupVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createGroupVersionResponse?: shared.CreateGroupVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
