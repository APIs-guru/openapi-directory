import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListTaskDefinitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTaskDefinitionsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTaskDefinitions = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"
}


export class ListTaskDefinitionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTaskDefinitionsXAmzTargetEnum;
}


export class ListTaskDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListTaskDefinitionsQueryParams;

  @SpeakeasyMetadata()
  headers: ListTaskDefinitionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListTaskDefinitionsRequest;
}


export class ListTaskDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  listTaskDefinitionsResponse?: shared.ListTaskDefinitionsResponse;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
