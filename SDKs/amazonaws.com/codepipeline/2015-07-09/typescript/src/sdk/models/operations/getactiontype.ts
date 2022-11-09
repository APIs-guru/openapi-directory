import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetActionTypeXAmzTargetEnum {
    CodePipeline20150709GetActionType = "CodePipeline_20150709.GetActionType"
}


export class GetActionTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetActionTypeXAmzTargetEnum;
}


export class GetActionTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetActionTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetActionTypeInput;
}


export class GetActionTypeResponse extends SpeakeasyBase {
  @Metadata()
  actionTypeNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getActionTypeOutput?: shared.GetActionTypeOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
