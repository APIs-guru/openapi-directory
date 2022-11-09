import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListNotebookExecutionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;
}

export enum ListNotebookExecutionsXAmzTargetEnum {
    ElasticMapReduceListNotebookExecutions = "ElasticMapReduce.ListNotebookExecutions"
}


export class ListNotebookExecutionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListNotebookExecutionsXAmzTargetEnum;
}


export class ListNotebookExecutionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListNotebookExecutionsQueryParams;

  @Metadata()
  headers: ListNotebookExecutionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListNotebookExecutionsInput;
}


export class ListNotebookExecutionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listNotebookExecutionsOutput?: shared.ListNotebookExecutionsOutput;

  @Metadata()
  statusCode: number;
}
