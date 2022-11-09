import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListArchivesXAmzTargetEnum {
    AwsEventsListArchives = "AWSEvents.ListArchives"
}


export class ListArchivesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListArchivesXAmzTargetEnum;
}


export class ListArchivesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListArchivesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListArchivesRequest;
}


export class ListArchivesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  listArchivesResponse?: shared.ListArchivesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
