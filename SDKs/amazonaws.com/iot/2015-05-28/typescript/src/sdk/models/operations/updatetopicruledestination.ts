import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTopicRuleDestinationHeaders extends SpeakeasyBase {
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

export enum UpdateTopicRuleDestinationRequestBodyStatusEnum {
    Enabled = "ENABLED",
    InProgress = "IN_PROGRESS",
    Disabled = "DISABLED",
    Error = "ERROR",
    Deleting = "DELETING"
}


export class UpdateTopicRuleDestinationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateTopicRuleDestinationRequestBodyStatusEnum;
}


export class UpdateTopicRuleDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateTopicRuleDestinationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateTopicRuleDestinationRequestBody;
}


export class UpdateTopicRuleDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingResourceUpdateException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateTopicRuleDestinationResponse?: Map<string, any>;
}
