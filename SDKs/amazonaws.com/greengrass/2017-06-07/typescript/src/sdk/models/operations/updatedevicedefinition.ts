import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionId" })
  deviceDefinitionId: string;
}


export class UpdateDeviceDefinitionHeaders extends SpeakeasyBase {
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


export class UpdateDeviceDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}


export class UpdateDeviceDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceDefinitionPathParams;

  @Metadata()
  headers: UpdateDeviceDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDeviceDefinitionRequestBody;
}


export class UpdateDeviceDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceDefinitionResponse?: Map<string, any>;
}
