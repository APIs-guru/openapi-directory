import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDocumentClassifiersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListDocumentClassifiersXAmzTargetEnum {
    Comprehend20171127ListDocumentClassifiers = "Comprehend_20171127.ListDocumentClassifiers"
}


export class ListDocumentClassifiersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDocumentClassifiersXAmzTargetEnum;
}


export class ListDocumentClassifiersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDocumentClassifiersQueryParams;

  @Metadata()
  headers: ListDocumentClassifiersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDocumentClassifiersRequest;
}


export class ListDocumentClassifiersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidFilterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listDocumentClassifiersResponse?: shared.ListDocumentClassifiersResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
