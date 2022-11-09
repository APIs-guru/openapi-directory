import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTaskDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTaskDefinitionsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTaskDefinitions = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"
}


export class ListTaskDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTaskDefinitionsXAmzTargetEnum;
}


export class ListTaskDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTaskDefinitionsQueryParams;

  @Metadata()
  headers: ListTaskDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTaskDefinitionsRequest;
}


export class ListTaskDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listTaskDefinitionsResponse?: shared.ListTaskDefinitionsResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
