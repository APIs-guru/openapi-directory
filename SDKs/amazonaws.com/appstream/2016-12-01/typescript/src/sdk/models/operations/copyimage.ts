import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CopyImageXAmzTargetEnum {
    PhotonAdminProxyServiceCopyImage = "PhotonAdminProxyService.CopyImage"
}


export class CopyImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: CopyImageXAmzTargetEnum;
}


export class CopyImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: CopyImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CopyImageRequest;
}


export class CopyImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  copyImageResponse?: shared.CopyImageResponse;

  @Metadata()
  incompatibleImageException?: any;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotAvailableException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
