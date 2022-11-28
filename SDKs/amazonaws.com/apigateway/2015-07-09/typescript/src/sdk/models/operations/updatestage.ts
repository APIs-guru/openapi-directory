import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateStagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stage_name" })
  stageName: string;
}


export class UpdateStageHeaders extends SpeakeasyBase {
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
}


export class UpdateStageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation })
  patchOperations?: shared.PatchOperation[];
}


export class UpdateStageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateStagePathParams;

  @SpeakeasyMetadata()
  headers: UpdateStageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateStageRequestBody;
}


export class UpdateStageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  stage?: shared.Stage;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
