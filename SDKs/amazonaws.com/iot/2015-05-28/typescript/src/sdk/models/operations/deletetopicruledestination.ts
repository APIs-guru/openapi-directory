import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTopicRuleDestinationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=arn" })
  arn: string;
}


export class DeleteTopicRuleDestinationHeaders extends SpeakeasyBase {
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


export class DeleteTopicRuleDestinationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTopicRuleDestinationPathParams;

  @Metadata()
  headers: DeleteTopicRuleDestinationHeaders;
}


export class DeleteTopicRuleDestinationResponse extends SpeakeasyBase {
  @Metadata()
  conflictingResourceUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteTopicRuleDestinationResponse?: Map<string, any>;

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
