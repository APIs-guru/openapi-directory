import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnsubscribeFromDatasetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DatasetName" })
  datasetName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DeviceId" })
  deviceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityId" })
  identityId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=IdentityPoolId" })
  identityPoolId: string;
}


export class UnsubscribeFromDatasetHeaders extends SpeakeasyBase {
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
}


export class UnsubscribeFromDatasetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsubscribeFromDatasetPathParams;

  @Metadata()
  headers: UnsubscribeFromDatasetHeaders;
}


export class UnsubscribeFromDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidConfigurationException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsubscribeFromDatasetResponse?: Map<string, any>;
}
