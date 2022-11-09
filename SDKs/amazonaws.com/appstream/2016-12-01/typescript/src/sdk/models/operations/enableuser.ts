import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableUserXAmzTargetEnum {
    PhotonAdminProxyServiceEnableUser = "PhotonAdminProxyService.EnableUser"
}


export class EnableUserHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableUserXAmzTargetEnum;
}


export class EnableUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableUserHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableUserRequest;
}


export class EnableUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  enableUserResult?: Map<string, any>;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
