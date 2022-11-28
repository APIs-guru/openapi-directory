import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListApplicationRevisionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006ListApplicationRevisions = "CodeDeploy_20141006.ListApplicationRevisions"
}


export class ListApplicationRevisionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListApplicationRevisionsXAmzTargetEnum;
}


export class ListApplicationRevisionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListApplicationRevisionsQueryParams;

  @SpeakeasyMetadata()
  headers: ListApplicationRevisionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListApplicationRevisionsInput;
}


export class ListApplicationRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDoesNotExistException?: any;

  @SpeakeasyMetadata()
  applicationNameRequiredException?: any;

  @SpeakeasyMetadata()
  bucketNameFilterRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidApplicationNameException?: any;

  @SpeakeasyMetadata()
  invalidBucketNameFilterException?: any;

  @SpeakeasyMetadata()
  invalidDeployedStateFilterException?: any;

  @SpeakeasyMetadata()
  invalidKeyPrefixFilterException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidSortByException?: any;

  @SpeakeasyMetadata()
  invalidSortOrderException?: any;

  @SpeakeasyMetadata()
  listApplicationRevisionsOutput?: shared.ListApplicationRevisionsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
