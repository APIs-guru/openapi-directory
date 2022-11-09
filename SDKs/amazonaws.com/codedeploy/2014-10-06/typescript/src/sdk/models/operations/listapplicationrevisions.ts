import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListApplicationRevisionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006ListApplicationRevisions = "CodeDeploy_20141006.ListApplicationRevisions"
}


export class ListApplicationRevisionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListApplicationRevisionsXAmzTargetEnum;
}


export class ListApplicationRevisionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListApplicationRevisionsQueryParams;

  @Metadata()
  headers: ListApplicationRevisionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListApplicationRevisionsInput;
}


export class ListApplicationRevisionsResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  bucketNameFilterRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidBucketNameFilterException?: any;

  @Metadata()
  invalidDeployedStateFilterException?: any;

  @Metadata()
  invalidKeyPrefixFilterException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidSortByException?: any;

  @Metadata()
  invalidSortOrderException?: any;

  @Metadata()
  listApplicationRevisionsOutput?: shared.ListApplicationRevisionsOutput;

  @Metadata()
  statusCode: number;
}
