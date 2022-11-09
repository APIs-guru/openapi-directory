import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateApiDestinationXAmzTargetEnum {
    AwsEventsCreateApiDestination = "AWSEvents.CreateApiDestination"
}


export class CreateApiDestinationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateApiDestinationXAmzTargetEnum;
}


export class CreateApiDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateApiDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateApiDestinationRequest;
}


export class CreateApiDestinationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createApiDestinationResponse?: shared.CreateApiDestinationResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
