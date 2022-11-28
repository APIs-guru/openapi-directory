import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectHeaders extends SpeakeasyBase {
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


// CreateProjectRequestBodyPlacementTemplate
/** 
 * An object defining the template for a placement.
**/
export class CreateProjectRequestBodyPlacementTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAttributes" })
  defaultAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=deviceTemplates", elemType: shared.DeviceTemplate })
  deviceTemplates?: Map<string, shared.DeviceTemplate>;
}


export class CreateProjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=placementTemplate" })
  placementTemplate?: CreateProjectRequestBodyPlacementTemplate;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateProjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProjectRequestBody;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createProjectResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
