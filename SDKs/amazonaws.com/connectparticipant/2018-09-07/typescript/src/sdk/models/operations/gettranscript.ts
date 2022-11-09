import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTranscriptQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetTranscriptHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" })
  xAmzBearer: string;

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
}

export enum GetTranscriptRequestBodyScanDirectionEnum {
    Forward = "FORWARD"
,    Backward = "BACKWARD"
}

export enum GetTranscriptRequestBodySortOrderEnum {
    Descending = "DESCENDING"
,    Ascending = "ASCENDING"
}


// GetTranscriptRequestBodyStartPosition
/** 
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
**/
export class GetTranscriptRequestBodyStartPosition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MostRecent" })
  mostRecent?: number;
}


export class GetTranscriptRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScanDirection" })
  scanDirection?: GetTranscriptRequestBodyScanDirectionEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: GetTranscriptRequestBodySortOrderEnum;

  @Metadata({ data: "json, name=StartPosition" })
  startPosition?: GetTranscriptRequestBodyStartPosition;
}


export class GetTranscriptRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTranscriptQueryParams;

  @Metadata()
  headers: GetTranscriptHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetTranscriptRequestBody;
}


export class GetTranscriptResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getTranscriptResponse?: shared.GetTranscriptResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
