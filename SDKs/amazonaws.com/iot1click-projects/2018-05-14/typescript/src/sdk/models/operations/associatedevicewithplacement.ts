import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateDeviceWithPlacementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceTemplateName" })
  deviceTemplateName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=placementName" })
  placementName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}


export class AssociateDeviceWithPlacementHeaders extends SpeakeasyBase {
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


export class AssociateDeviceWithPlacementRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId: string;
}


export class AssociateDeviceWithPlacementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssociateDeviceWithPlacementPathParams;

  @SpeakeasyMetadata()
  headers: AssociateDeviceWithPlacementHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssociateDeviceWithPlacementRequestBody;
}


export class AssociateDeviceWithPlacementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateDeviceWithPlacementResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
