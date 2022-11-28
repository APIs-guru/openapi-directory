import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}


export class UpdateProjectHeaders extends SpeakeasyBase {
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


// UpdateProjectRequestBodyPlacementTemplate
/** 
 * An object defining the template for a placement.
**/
export class UpdateProjectRequestBodyPlacementTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAttributes" })
  defaultAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=deviceTemplates", elemType: shared.DeviceTemplate })
  deviceTemplates?: Map<string, shared.DeviceTemplate>;
}


export class UpdateProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=placementTemplate" })
  placementTemplate?: UpdateProjectRequestBodyPlacementTemplate;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProjectPathParams;

  @SpeakeasyMetadata()
  headers: UpdateProjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBody;
}


export class UpdateProjectResponse extends SpeakeasyBase {
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
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateProjectResponse?: Map<string, any>;
}
