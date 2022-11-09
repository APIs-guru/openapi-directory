import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateVpceConfigurationXAmzTargetEnum {
    DeviceFarm20150623CreateVpceConfiguration = "DeviceFarm_20150623.CreateVPCEConfiguration"
}


export class CreateVpceConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateVpceConfigurationXAmzTargetEnum;
}


export class CreateVpceConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateVpceConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateVpceConfigurationRequest;
}


export class CreateVpceConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVpceConfigurationResult?: shared.CreateVpceConfigurationResult;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
