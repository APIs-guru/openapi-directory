import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeprecateThingTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingTypeName" })
  thingTypeName: string;
}


export class DeprecateThingTypeHeaders extends SpeakeasyBase {
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


export class DeprecateThingTypeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=undoDeprecate" })
  undoDeprecate?: boolean;
}


export class DeprecateThingTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeprecateThingTypePathParams;

  @Metadata()
  headers: DeprecateThingTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeprecateThingTypeRequestBody;
}


export class DeprecateThingTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deprecateThingTypeResponse?: Map<string, any>;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
