import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListDevicesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListDevices = "AWSCognitoIdentityProviderService.ListDevices"
}


export class ListDevicesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListDevicesXAmzTargetEnum;
}


export class ListDevicesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListDevicesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListDevicesRequest;
}


export class ListDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidUserPoolConfigurationException?: any;

  @Metadata()
  listDevicesResponse?: shared.ListDevicesResponse;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  passwordResetRequiredException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  userNotConfirmedException?: any;

  @Metadata()
  userNotFoundException?: any;
}
