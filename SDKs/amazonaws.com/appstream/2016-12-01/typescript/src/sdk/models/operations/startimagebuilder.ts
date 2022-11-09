import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceStartImageBuilder = "PhotonAdminProxyService.StartImageBuilder"
}


export class StartImageBuilderHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartImageBuilderXAmzTargetEnum;
}


export class StartImageBuilderRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartImageBuilderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartImageBuilderRequest;
}


export class StartImageBuilderResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleImageException?: any;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  resourceNotAvailableException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startImageBuilderResult?: shared.StartImageBuilderResult;

  @Metadata()
  statusCode: number;
}
