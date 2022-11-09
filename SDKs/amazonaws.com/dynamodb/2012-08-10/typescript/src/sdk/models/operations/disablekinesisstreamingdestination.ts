import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableKinesisStreamingDestinationXAmzTargetEnum {
    DynamoDb20120810DisableKinesisStreamingDestination = "DynamoDB_20120810.DisableKinesisStreamingDestination"
}


export class DisableKinesisStreamingDestinationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableKinesisStreamingDestinationXAmzTargetEnum;
}


export class DisableKinesisStreamingDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableKinesisStreamingDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.KinesisStreamingDestinationInput;
}


export class DisableKinesisStreamingDestinationResponse extends SpeakeasyBase {
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
