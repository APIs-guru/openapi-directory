import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDeviceDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionId" })
  deviceDefinitionId: string;
}


export class DeleteDeviceDefinitionHeaders extends SpeakeasyBase {
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


export class DeleteDeviceDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDeviceDefinitionPathParams;

  @SpeakeasyMetadata()
  headers: DeleteDeviceDefinitionHeaders;
}


export class DeleteDeviceDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDeviceDefinitionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
