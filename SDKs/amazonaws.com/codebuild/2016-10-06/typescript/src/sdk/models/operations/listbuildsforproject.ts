import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBuildsForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListBuildsForProjectXAmzTargetEnum {
    CodeBuild20161006ListBuildsForProject = "CodeBuild_20161006.ListBuildsForProject"
}


export class ListBuildsForProjectHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListBuildsForProjectXAmzTargetEnum;
}


export class ListBuildsForProjectRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListBuildsForProjectQueryParams;

  @Metadata()
  headers: ListBuildsForProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListBuildsForProjectInput;
}


export class ListBuildsForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listBuildsForProjectOutput?: shared.ListBuildsForProjectOutput;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
