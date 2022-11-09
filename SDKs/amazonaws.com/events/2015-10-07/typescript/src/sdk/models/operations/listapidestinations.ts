import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListApiDestinationsXAmzTargetEnum {
    AwsEventsListApiDestinations = "AWSEvents.ListApiDestinations"
}


export class ListApiDestinationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListApiDestinationsXAmzTargetEnum;
}


export class ListApiDestinationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListApiDestinationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListApiDestinationsRequest;
}


export class ListApiDestinationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  listApiDestinationsResponse?: shared.ListApiDestinationsResponse;

  @Metadata()
  statusCode: number;
}
