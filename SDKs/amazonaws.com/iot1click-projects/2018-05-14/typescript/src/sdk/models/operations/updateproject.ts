import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectName" })
  projectName: string;
}


export class UpdateProjectHeaders extends SpeakeasyBase {
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


// UpdateProjectRequestBodyPlacementTemplate
/** 
 * An object defining the template for a placement.
**/
export class UpdateProjectRequestBodyPlacementTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAttributes" })
  defaultAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=deviceTemplates", elemType: shared.DeviceTemplate })
  deviceTemplates?: Map<string, shared.DeviceTemplate>;
}


export class UpdateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=placementTemplate" })
  placementTemplate?: UpdateProjectRequestBodyPlacementTemplate;
}


export class UpdateProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProjectPathParams;

  @Metadata()
  headers: UpdateProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateProjectRequestBody;
}


export class UpdateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateProjectResponse?: Map<string, any>;
}
