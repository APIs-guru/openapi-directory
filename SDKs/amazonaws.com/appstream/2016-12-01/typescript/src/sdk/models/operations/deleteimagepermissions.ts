import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteImagePermissionsXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteImagePermissions = "PhotonAdminProxyService.DeleteImagePermissions"
}


export class DeleteImagePermissionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteImagePermissionsXAmzTargetEnum;
}


export class DeleteImagePermissionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteImagePermissionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteImagePermissionsRequest;
}


export class DeleteImagePermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteImagePermissionsResult?: Map<string, any>;

  @Metadata()
  resourceNotAvailableException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
