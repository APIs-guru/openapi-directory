import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateRepositoryXAmzTargetEnum {
    CodeCommit20150413CreateRepository = "CodeCommit_20150413.CreateRepository"
}


export class CreateRepositoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateRepositoryXAmzTargetEnum;
}


export class CreateRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRepositoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRepositoryInput;
}


export class CreateRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRepositoryOutput?: shared.CreateRepositoryOutput;

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
  invalidRepositoryDescriptionException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  invalidSystemTagUsageException?: any;

  @Metadata()
  invalidTagsMapException?: any;

  @Metadata()
  repositoryLimitExceededException?: any;

  @Metadata()
  repositoryNameExistsException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagPolicyException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
