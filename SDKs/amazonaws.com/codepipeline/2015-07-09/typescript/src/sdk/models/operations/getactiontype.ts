import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetActionTypeXAmzTargetEnum {
    CodePipeline20150709GetActionType = "CodePipeline_20150709.GetActionType"
}


export class GetActionTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetActionTypeXAmzTargetEnum;
}


export class GetActionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetActionTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetActionTypeInput;
}


export class GetActionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionTypeNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getActionTypeOutput?: shared.GetActionTypeOutput;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
