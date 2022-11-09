import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdminGetDeviceXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminGetDevice = "AWSCognitoIdentityProviderService.AdminGetDevice"
}


export class AdminGetDeviceHeaders extends SpeakeasyBase {
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
  xAmzTarget: AdminGetDeviceXAmzTargetEnum;
}


export class AdminGetDeviceRequest extends SpeakeasyBase {
  @Metadata()
  headers: AdminGetDeviceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdminGetDeviceRequest;
}


export class AdminGetDeviceResponse extends SpeakeasyBase {
  @Metadata()
  adminGetDeviceResponse?: shared.AdminGetDeviceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidUserPoolConfigurationException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
