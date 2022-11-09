import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UntagProjectXAmzTargetEnum {
    CodeStar20170419UntagProject = "CodeStar_20170419.UntagProject"
}


export class UntagProjectHeaders extends SpeakeasyBase {
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
  xAmzTarget: UntagProjectXAmzTargetEnum;
}


export class UntagProjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: UntagProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UntagProjectRequest;
}


export class UntagProjectResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  projectNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  untagProjectResult?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
