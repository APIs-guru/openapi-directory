import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateStreamingUrlxAmzTargetEnum {
    PhotonAdminProxyServiceCreateStreamingUrl = "PhotonAdminProxyService.CreateStreamingURL"
}


export class CreateStreamingUrlHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateStreamingUrlxAmzTargetEnum;
}


export class CreateStreamingUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStreamingUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateStreamingUrlRequest;
}


export class CreateStreamingUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createStreamingUrlResult?: shared.CreateStreamingUrlResult;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceNotAvailableException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
