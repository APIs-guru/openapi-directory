import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCustomActionTypeXAmzTargetEnum {
    CodePipeline20150709CreateCustomActionType = "CodePipeline_20150709.CreateCustomActionType"
}


export class CreateCustomActionTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCustomActionTypeXAmzTargetEnum;
}


export class CreateCustomActionTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomActionTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCustomActionTypeInput;
}


export class CreateCustomActionTypeResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCustomActionTypeOutput?: shared.CreateCustomActionTypeOutput;

  @Metadata()
  invalidTagsException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTagsException?: any;

  @Metadata()
  validationException?: any;
}
