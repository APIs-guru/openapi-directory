import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSharedProjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListSharedProjectsXAmzTargetEnum {
    CodeBuild20161006ListSharedProjects = "CodeBuild_20161006.ListSharedProjects"
}


export class ListSharedProjectsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListSharedProjectsXAmzTargetEnum;
}


export class ListSharedProjectsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSharedProjectsQueryParams;

  @Metadata()
  headers: ListSharedProjectsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListSharedProjectsInput;
}


export class ListSharedProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listSharedProjectsOutput?: shared.ListSharedProjectsOutput;

  @Metadata()
  statusCode: number;
}
