import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDeviceDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionId" })
  deviceDefinitionId: string;
}


export class DeleteDeviceDefinitionHeaders extends SpeakeasyBase {
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


export class DeleteDeviceDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDeviceDefinitionPathParams;

  @Metadata()
  headers: DeleteDeviceDefinitionHeaders;
}


export class DeleteDeviceDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteDeviceDefinitionResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
