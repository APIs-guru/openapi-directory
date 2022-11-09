import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterCrossAccountAccessRoleXAmzTargetEnum {
    InspectorServiceRegisterCrossAccountAccessRole = "InspectorService.RegisterCrossAccountAccessRole"
}


export class RegisterCrossAccountAccessRoleHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterCrossAccountAccessRoleXAmzTargetEnum;
}


export class RegisterCrossAccountAccessRoleRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterCrossAccountAccessRoleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterCrossAccountAccessRoleRequest;
}


export class RegisterCrossAccountAccessRoleResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidCrossAccountRoleException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  serviceTemporarilyUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
