import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006BatchGetApplicationRevisions = "CodeDeploy_20141006.BatchGetApplicationRevisions"
}


export class BatchGetApplicationRevisionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetApplicationRevisionsXAmzTargetEnum;
}


export class BatchGetApplicationRevisionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetApplicationRevisionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetApplicationRevisionsInput;
}


export class BatchGetApplicationRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDoesNotExistException?: any;

  @SpeakeasyMetadata()
  applicationNameRequiredException?: any;

  @SpeakeasyMetadata()
  batchGetApplicationRevisionsOutput?: shared.BatchGetApplicationRevisionsOutput;

  @SpeakeasyMetadata()
  batchLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidApplicationNameException?: any;

  @SpeakeasyMetadata()
  invalidRevisionException?: any;

  @SpeakeasyMetadata()
  revisionRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
