import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TagResourceXAmzTargetEnum {
    CodeCommit20150413TagResource = "CodeCommit_20150413.TagResource"
}


export class TagResourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: TagResourceXAmzTargetEnum;
}


export class TagResourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: TagResourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TagResourceInput;
}


export class TagResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  invalidResourceArnException?: any;

  @Metadata()
  invalidSystemTagUsageException?: any;

  @Metadata()
  invalidTagsMapException?: any;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  resourceArnRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagPolicyException?: any;

  @Metadata()
  tagsMapRequiredException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
