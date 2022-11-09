import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateComponentConfigurationXAmzTargetEnum {
    Ec2WindowsBarleyServiceUpdateComponentConfiguration = "EC2WindowsBarleyService.UpdateComponentConfiguration"
}


export class UpdateComponentConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateComponentConfigurationXAmzTargetEnum;
}


export class UpdateComponentConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateComponentConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateComponentConfigurationRequest;
}


export class UpdateComponentConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateComponentConfigurationResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
