import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteApiDestinationXAmzTargetEnum {
    AwsEventsDeleteApiDestination = "AWSEvents.DeleteApiDestination"
}


export class DeleteApiDestinationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApiDestinationXAmzTargetEnum;
}


export class DeleteApiDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteApiDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApiDestinationRequest;
}


export class DeleteApiDestinationResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteApiDestinationResponse?: Map<string, any>;

  @Metadata()
  internalException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
