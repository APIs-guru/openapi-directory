import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExpireSessionXAmzTargetEnum {
    PhotonAdminProxyServiceExpireSession = "PhotonAdminProxyService.ExpireSession"
}


export class ExpireSessionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExpireSessionXAmzTargetEnum;
}


export class ExpireSessionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExpireSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExpireSessionRequest;
}


export class ExpireSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  expireSessionResult?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
