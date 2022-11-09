import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePartnerEventSourceXAmzTargetEnum {
    AwsEventsCreatePartnerEventSource = "AWSEvents.CreatePartnerEventSource"
}


export class CreatePartnerEventSourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePartnerEventSourceXAmzTargetEnum;
}


export class CreatePartnerEventSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePartnerEventSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePartnerEventSourceRequest;
}


export class CreatePartnerEventSourceResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createPartnerEventSourceResponse?: shared.CreatePartnerEventSourceResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  operationDisabledException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;
}
