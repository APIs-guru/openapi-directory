import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateImageBuilderStreamingUrlxAmzTargetEnum {
    PhotonAdminProxyServiceCreateImageBuilderStreamingUrl = "PhotonAdminProxyService.CreateImageBuilderStreamingURL"
}


export class CreateImageBuilderStreamingUrlHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateImageBuilderStreamingUrlxAmzTargetEnum;
}


export class CreateImageBuilderStreamingUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateImageBuilderStreamingUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateImageBuilderStreamingUrlRequest;
}


export class CreateImageBuilderStreamingUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createImageBuilderStreamingUrlResult?: shared.CreateImageBuilderStreamingUrlResult;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
