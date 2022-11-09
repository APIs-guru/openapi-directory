import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTopicRuleDestinationHeaders extends SpeakeasyBase {
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
}


// CreateTopicRuleDestinationRequestBodyDestinationConfiguration
/** 
 * Configuration of the topic rule destination.
**/
export class CreateTopicRuleDestinationRequestBodyDestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpUrlConfiguration" })
  httpUrlConfiguration?: shared.HttpUrlDestinationConfiguration;

  @Metadata({ data: "json, name=vpcConfiguration" })
  vpcConfiguration?: shared.VpcDestinationConfiguration;
}


export class CreateTopicRuleDestinationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationConfiguration" })
  destinationConfiguration: CreateTopicRuleDestinationRequestBodyDestinationConfiguration;
}


export class CreateTopicRuleDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTopicRuleDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTopicRuleDestinationRequestBody;
}


export class CreateTopicRuleDestinationResponse extends SpeakeasyBase {
  @Metadata()
  conflictingResourceUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createTopicRuleDestinationResponse?: shared.CreateTopicRuleDestinationResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
