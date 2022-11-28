import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceStartImageBuilder = "PhotonAdminProxyService.StartImageBuilder"
}


export class StartImageBuilderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartImageBuilderXAmzTargetEnum;
}


export class StartImageBuilderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartImageBuilderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartImageBuilderRequest;
}


export class StartImageBuilderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incompatibleImageException?: any;

  @SpeakeasyMetadata()
  invalidAccountStatusException?: any;

  @SpeakeasyMetadata()
  resourceNotAvailableException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  startImageBuilderResult?: shared.StartImageBuilderResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
