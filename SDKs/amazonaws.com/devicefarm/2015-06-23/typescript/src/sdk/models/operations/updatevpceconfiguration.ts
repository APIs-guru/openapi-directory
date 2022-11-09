import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateVpceConfigurationXAmzTargetEnum {
    DeviceFarm20150623UpdateVpceConfiguration = "DeviceFarm_20150623.UpdateVPCEConfiguration"
}


export class UpdateVpceConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateVpceConfigurationXAmzTargetEnum;
}


export class UpdateVpceConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateVpceConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateVpceConfigurationRequest;
}


export class UpdateVpceConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateVpceConfigurationResult?: shared.UpdateVpceConfigurationResult;
}
