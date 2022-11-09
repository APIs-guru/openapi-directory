import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTopicRuleDestinationHeaders extends SpeakeasyBase {
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

export enum UpdateTopicRuleDestinationRequestBodyStatusEnum {
    Enabled = "ENABLED"
,    InProgress = "IN_PROGRESS"
,    Disabled = "DISABLED"
,    Error = "ERROR"
,    Deleting = "DELETING"
}


export class UpdateTopicRuleDestinationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=status" })
  status: UpdateTopicRuleDestinationRequestBodyStatusEnum;
}


export class UpdateTopicRuleDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTopicRuleDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateTopicRuleDestinationRequestBody;
}


export class UpdateTopicRuleDestinationResponse extends SpeakeasyBase {
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

  @Metadata()
  updateTopicRuleDestinationResponse?: Map<string, any>;
}
