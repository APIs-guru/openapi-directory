import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListVpceConfigurationsXAmzTargetEnum {
    DeviceFarm20150623ListVpceConfigurations = "DeviceFarm_20150623.ListVPCEConfigurations"
}


export class ListVpceConfigurationsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListVpceConfigurationsXAmzTargetEnum;
}


export class ListVpceConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListVpceConfigurationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListVpceConfigurationsRequest;
}


export class ListVpceConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  argumentException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listVpceConfigurationsResult?: shared.ListVpceConfigurationsResult;

  @SpeakeasyMetadata()
  serviceAccountException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
