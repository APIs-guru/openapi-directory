import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListMlTransformsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListMlTransformsXAmzTargetEnum {
    AwsGlueListMlTransforms = "AWSGlue.ListMLTransforms"
}


export class ListMlTransformsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListMlTransformsXAmzTargetEnum;
}


export class ListMlTransformsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListMlTransformsQueryParams;

  @Metadata()
  headers: ListMlTransformsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListMlTransformsRequest;
}


export class ListMlTransformsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listMlTransformsResponse?: shared.ListMlTransformsResponse;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
