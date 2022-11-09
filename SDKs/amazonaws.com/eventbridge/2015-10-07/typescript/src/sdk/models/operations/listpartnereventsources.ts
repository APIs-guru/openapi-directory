import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListPartnerEventSourcesXAmzTargetEnum {
    AwsEventsListPartnerEventSources = "AWSEvents.ListPartnerEventSources"
}


export class ListPartnerEventSourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPartnerEventSourcesXAmzTargetEnum;
}


export class ListPartnerEventSourcesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListPartnerEventSourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListPartnerEventSourcesRequest;
}


export class ListPartnerEventSourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  listPartnerEventSourcesResponse?: shared.ListPartnerEventSourcesResponse;

  @Metadata()
  operationDisabledException?: any;

  @Metadata()
  statusCode: number;
}
