import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateDeviceWithPlacementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceTemplateName" })
  deviceTemplateName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=placementName" })
  placementName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}


export class AssociateDeviceWithPlacementHeaders extends SpeakeasyBase {
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


export class AssociateDeviceWithPlacementRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId: string;
}


export class AssociateDeviceWithPlacementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssociateDeviceWithPlacementPathParams;

  @Metadata()
  headers: AssociateDeviceWithPlacementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateDeviceWithPlacementRequestBody;
}


export class AssociateDeviceWithPlacementResponse extends SpeakeasyBase {
  @Metadata()
  associateDeviceWithPlacementResponse?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
