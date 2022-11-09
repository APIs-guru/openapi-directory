import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteInterconnectXAmzTargetEnum {
    OvertureServiceDeleteInterconnect = "OvertureService.DeleteInterconnect"
}


export class DeleteInterconnectHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteInterconnectXAmzTargetEnum;
}


export class DeleteInterconnectRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteInterconnectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteInterconnectRequest;
}


export class DeleteInterconnectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteInterconnectResponse?: shared.DeleteInterconnectResponse;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
