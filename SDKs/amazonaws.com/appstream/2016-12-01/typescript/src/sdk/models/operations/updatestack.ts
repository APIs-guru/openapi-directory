import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateStackXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateStack = "PhotonAdminProxyService.UpdateStack"
}


export class UpdateStackHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateStackXAmzTargetEnum;
}


export class UpdateStackRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateStackHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateStackRequest;
}


export class UpdateStackResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleImageException?: any;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateStackResult?: shared.UpdateStackResult;
}
