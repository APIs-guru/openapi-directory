import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateActionTypeXAmzTargetEnum {
    CodePipeline20150709UpdateActionType = "CodePipeline_20150709.UpdateActionType"
}


export class UpdateActionTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateActionTypeXAmzTargetEnum;
}


export class UpdateActionTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateActionTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateActionTypeInput;
}


export class UpdateActionTypeResponse extends SpeakeasyBase {
  @Metadata()
  actionTypeNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  requestFailedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
