import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDeviceDefinitionVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionId" })
  deviceDefinitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DeviceDefinitionVersionId" })
  deviceDefinitionVersionId: string;
}


export class GetDeviceDefinitionVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetDeviceDefinitionVersionHeaders extends SpeakeasyBase {
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


export class GetDeviceDefinitionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceDefinitionVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceDefinitionVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeviceDefinitionVersionHeaders;
}


export class GetDeviceDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDeviceDefinitionVersionResponse?: shared.GetDeviceDefinitionVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
