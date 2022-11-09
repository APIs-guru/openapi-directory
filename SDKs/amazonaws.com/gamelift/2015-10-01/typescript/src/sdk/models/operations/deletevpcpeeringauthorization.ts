import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteVpcPeeringAuthorizationXAmzTargetEnum {
    GameLiftDeleteVpcPeeringAuthorization = "GameLift.DeleteVpcPeeringAuthorization"
}


export class DeleteVpcPeeringAuthorizationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteVpcPeeringAuthorizationXAmzTargetEnum;
}


export class DeleteVpcPeeringAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteVpcPeeringAuthorizationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteVpcPeeringAuthorizationInput;
}


export class DeleteVpcPeeringAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteVpcPeeringAuthorizationOutput?: Map<string, any>;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
