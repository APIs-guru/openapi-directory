import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeletePartnerEventSourceXAmzTargetEnum {
    AwsEventsDeletePartnerEventSource = "AWSEvents.DeletePartnerEventSource"
}


export class DeletePartnerEventSourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeletePartnerEventSourceXAmzTargetEnum;
}


export class DeletePartnerEventSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeletePartnerEventSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeletePartnerEventSourceRequest;
}


export class DeletePartnerEventSourceResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  operationDisabledException?: any;

  @Metadata()
  statusCode: number;
}
