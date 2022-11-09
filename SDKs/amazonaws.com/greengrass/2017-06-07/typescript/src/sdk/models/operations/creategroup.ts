import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupHeaders extends SpeakeasyBase {
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


// CreateGroupRequestBodyInitialVersion
/** 
 * Information about a group version.
**/
export class CreateGroupRequestBodyInitialVersion extends SpeakeasyBase {
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


export class CreateGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateGroupRequestBodyInitialVersion;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateGroupRequestBody;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createGroupResponse?: shared.CreateGroupResponse;

  @Metadata()
  statusCode: number;
}
