import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTranscriptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetTranscriptHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" })
  xAmzBearer: string;

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
}

export enum GetTranscriptRequestBodyScanDirectionEnum {
    Forward = "FORWARD",
    Backward = "BACKWARD"
}

export enum GetTranscriptRequestBodySortOrderEnum {
    Descending = "DESCENDING",
    Ascending = "ASCENDING"
}


// GetTranscriptRequestBodyStartPosition
/** 
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
**/
export class GetTranscriptRequestBodyStartPosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbsoluteTime" })
  absoluteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MostRecent" })
  mostRecent?: number;
}


export class GetTranscriptRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactId" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScanDirection" })
  scanDirection?: GetTranscriptRequestBodyScanDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: GetTranscriptRequestBodySortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=StartPosition" })
  startPosition?: GetTranscriptRequestBodyStartPosition;
}


export class GetTranscriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTranscriptQueryParams;

  @SpeakeasyMetadata()
  headers: GetTranscriptHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetTranscriptRequestBody;
}


export class GetTranscriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTranscriptResponse?: shared.GetTranscriptResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
