import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" })
  applicationId: string;
}


export class UpdateApplicationHeaders extends SpeakeasyBase {
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


export class UpdateApplicationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationDescription" })
  applicationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApplicationPathParams;

  @SpeakeasyMetadata()
  headers: UpdateApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateApplicationRequestBody;
}


export class UpdateApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateApplicationResponse?: Map<string, any>;
}
