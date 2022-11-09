import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListApplicationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListApplicationsXAmzTargetEnum {
    CodeDeploy20141006ListApplications = "CodeDeploy_20141006.ListApplications"
}


export class ListApplicationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListApplicationsXAmzTargetEnum;
}


export class ListApplicationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListApplicationsQueryParams;

  @Metadata()
  headers: ListApplicationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListApplicationsInput;
}


export class ListApplicationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listApplicationsOutput?: shared.ListApplicationsOutput;

  @Metadata()
  statusCode: number;
}
