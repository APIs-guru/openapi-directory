import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGroupHeaders extends SpeakeasyBase {
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


// CreateGroupRequestBodyInitialVersion
/** 
 * Information about a group version.
**/
export class CreateGroupRequestBodyInitialVersion extends SpeakeasyBase {
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


export class CreateGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateGroupRequestBodyInitialVersion;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGroupRequestBody;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createGroupResponse?: shared.CreateGroupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
