import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTopicRuleDestinationHeaders extends SpeakeasyBase {
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
}


// CreateTopicRuleDestinationRequestBodyDestinationConfiguration
/** 
 * Configuration of the topic rule destination.
**/
export class CreateTopicRuleDestinationRequestBodyDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpUrlConfiguration" })
  httpUrlConfiguration?: shared.HttpUrlDestinationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=vpcConfiguration" })
  vpcConfiguration?: shared.VpcDestinationConfiguration;
}


export class CreateTopicRuleDestinationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationConfiguration" })
  destinationConfiguration: CreateTopicRuleDestinationRequestBodyDestinationConfiguration;
}


export class CreateTopicRuleDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTopicRuleDestinationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateTopicRuleDestinationRequestBody;
}


export class CreateTopicRuleDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingResourceUpdateException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createTopicRuleDestinationResponse?: shared.CreateTopicRuleDestinationResponse;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
