import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfirmTopicRuleDestinationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=confirmationToken" })
  confirmationToken: string;
}


export class ConfirmTopicRuleDestinationHeaders extends SpeakeasyBase {
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


export class ConfirmTopicRuleDestinationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfirmTopicRuleDestinationPathParams;

  @Metadata()
  headers: ConfirmTopicRuleDestinationHeaders;
}


export class ConfirmTopicRuleDestinationResponse extends SpeakeasyBase {
  @Metadata()
  confirmTopicRuleDestinationResponse?: Map<string, any>;

  @Metadata()
  conflictingResourceUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
