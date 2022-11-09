import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTaskDefinitionFamiliesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTaskDefinitionFamiliesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTaskDefinitionFamilies = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies"
}


export class ListTaskDefinitionFamiliesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTaskDefinitionFamiliesXAmzTargetEnum;
}


export class ListTaskDefinitionFamiliesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTaskDefinitionFamiliesQueryParams;

  @Metadata()
  headers: ListTaskDefinitionFamiliesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTaskDefinitionFamiliesRequest;
}


export class ListTaskDefinitionFamiliesResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listTaskDefinitionFamiliesResponse?: shared.ListTaskDefinitionFamiliesResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
