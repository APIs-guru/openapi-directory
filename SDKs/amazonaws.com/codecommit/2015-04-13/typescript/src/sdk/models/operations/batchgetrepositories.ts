import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchGetRepositories = "CodeCommit_20150413.BatchGetRepositories"
}


export class BatchGetRepositoriesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetRepositoriesXAmzTargetEnum;
}


export class BatchGetRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetRepositoriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetRepositoriesInput;
}


export class BatchGetRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  batchGetRepositoriesOutput?: shared.BatchGetRepositoriesOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  encryptionIntegrityChecksFailedException?: any;

  @Metadata()
  encryptionKeyAccessDeniedException?: any;

  @Metadata()
  encryptionKeyDisabledException?: any;

  @Metadata()
  encryptionKeyNotFoundException?: any;

  @Metadata()
  encryptionKeyUnavailableException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  maximumRepositoryNamesExceededException?: any;

  @Metadata()
  repositoryNamesRequiredException?: any;

  @Metadata()
  statusCode: number;
}
