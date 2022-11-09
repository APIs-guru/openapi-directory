import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListVpceConfigurationsXAmzTargetEnum {
    DeviceFarm20150623ListVpceConfigurations = "DeviceFarm_20150623.ListVPCEConfigurations"
}


export class ListVpceConfigurationsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListVpceConfigurationsXAmzTargetEnum;
}


export class ListVpceConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListVpceConfigurationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListVpceConfigurationsRequest;
}


export class ListVpceConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  listVpceConfigurationsResult?: shared.ListVpceConfigurationsResult;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
