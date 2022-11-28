import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeprecateThingTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingTypeName" })
  thingTypeName: string;
}


export class DeprecateThingTypeHeaders extends SpeakeasyBase {
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


export class DeprecateThingTypeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=undoDeprecate" })
  undoDeprecate?: boolean;
}


export class DeprecateThingTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeprecateThingTypePathParams;

  @SpeakeasyMetadata()
  headers: DeprecateThingTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeprecateThingTypeRequestBody;
}


export class DeprecateThingTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deprecateThingTypeResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
