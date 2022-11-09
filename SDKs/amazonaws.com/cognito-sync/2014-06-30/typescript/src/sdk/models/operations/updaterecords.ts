import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRecordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DatasetName" })
  datasetName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" })
  identityId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class UpdateRecordsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-Client-Context" })
  xAmzClientContext?: string;
}


export class UpdateRecordsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=RecordPatches", elemType: shared.RecordPatch })
  recordPatches?: shared.RecordPatch[];

  @Metadata({ data: "json, name=SyncSessionToken" })
  syncSessionToken: string;
}


export class UpdateRecordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRecordsPathParams;

  @Metadata()
  headers: UpdateRecordsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateRecordsRequestBody;
}


export class UpdateRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidLambdaFunctionOutputException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  lambdaThrottledException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateRecordsResponse?: shared.UpdateRecordsResponse;
}
