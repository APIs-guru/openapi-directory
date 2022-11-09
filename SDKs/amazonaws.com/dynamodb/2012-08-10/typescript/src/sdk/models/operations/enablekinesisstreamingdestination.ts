import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDb20120810EnableKinesisStreamingDestination = "DynamoDB_20120810.EnableKinesisStreamingDestination"
}


export class EnableKinesisStreamingDestinationHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: EnableKinesisStreamingDestinationXAmzTargetEnum;
}


export class EnableKinesisStreamingDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableKinesisStreamingDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.KinesisStreamingDestinationInput;
}


export class EnableKinesisStreamingDestinationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  kinesisStreamingDestinationOutput?: shared.KinesisStreamingDestinationOutput;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
