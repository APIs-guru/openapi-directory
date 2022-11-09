import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEntityRecognizersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListEntityRecognizersXAmzTargetEnum {
    Comprehend20171127ListEntityRecognizers = "Comprehend_20171127.ListEntityRecognizers"
}


export class ListEntityRecognizersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListEntityRecognizersXAmzTargetEnum;
}


export class ListEntityRecognizersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEntityRecognizersQueryParams;

  @Metadata()
  headers: ListEntityRecognizersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListEntityRecognizersRequest;
}


export class ListEntityRecognizersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidFilterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listEntityRecognizersResponse?: shared.ListEntityRecognizersResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
