import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRecordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DatasetName" })
  datasetName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" })
  identityId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class UpdateRecordsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-Client-Context" })
  xAmzClientContext?: string;
}


export class UpdateRecordsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordPatches", elemType: shared.RecordPatch })
  recordPatches?: shared.RecordPatch[];

  @SpeakeasyMetadata({ data: "json, name=SyncSessionToken" })
  syncSessionToken: string;
}


export class UpdateRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRecordsPathParams;

  @SpeakeasyMetadata()
  headers: UpdateRecordsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateRecordsRequestBody;
}


export class UpdateRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalErrorException?: any;

  @SpeakeasyMetadata()
  invalidLambdaFunctionOutputException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  lambdaThrottledException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateRecordsResponse?: shared.UpdateRecordsResponse;
}
