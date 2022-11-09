import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteVpceConfigurationXAmzTargetEnum {
    DeviceFarm20150623DeleteVpceConfiguration = "DeviceFarm_20150623.DeleteVPCEConfiguration"
}


export class DeleteVpceConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteVpceConfigurationXAmzTargetEnum;
}


export class DeleteVpceConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteVpceConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteVpceConfigurationRequest;
}


export class DeleteVpceConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteVpceConfigurationResult?: Map<string, any>;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
