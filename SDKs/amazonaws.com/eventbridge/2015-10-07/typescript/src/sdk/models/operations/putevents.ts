import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutEventsXAmzTargetEnum {
    AwsEventsPutEvents = "AWSEvents.PutEvents"
}


export class PutEventsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutEventsXAmzTargetEnum;
}


export class PutEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutEventsRequest;
}


export class PutEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  putEventsResponse?: shared.PutEventsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
