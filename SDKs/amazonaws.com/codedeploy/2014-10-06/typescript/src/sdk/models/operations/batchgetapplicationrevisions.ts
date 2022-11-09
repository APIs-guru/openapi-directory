import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetApplicationRevisionsXAmzTargetEnum {
    CodeDeploy20141006BatchGetApplicationRevisions = "CodeDeploy_20141006.BatchGetApplicationRevisions"
}


export class BatchGetApplicationRevisionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetApplicationRevisionsXAmzTargetEnum;
}


export class BatchGetApplicationRevisionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetApplicationRevisionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetApplicationRevisionsInput;
}


export class BatchGetApplicationRevisionsResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  batchGetApplicationRevisionsOutput?: shared.BatchGetApplicationRevisionsOutput;

  @Metadata()
  batchLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidRevisionException?: any;

  @Metadata()
  revisionRequiredException?: any;

  @Metadata()
  statusCode: number;
}
