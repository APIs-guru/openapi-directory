import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListProjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListProjectsXAmzTargetEnum {
    CodeBuild20161006ListProjects = "CodeBuild_20161006.ListProjects"
}


export class ListProjectsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListProjectsXAmzTargetEnum;
}


export class ListProjectsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListProjectsQueryParams;

  @Metadata()
  headers: ListProjectsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListProjectsInput;
}


export class ListProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listProjectsOutput?: shared.ListProjectsOutput;

  @Metadata()
  statusCode: number;
}
