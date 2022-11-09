import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateConnectionFromLagXAmzTargetEnum {
    OvertureServiceDisassociateConnectionFromLag = "OvertureService.DisassociateConnectionFromLag"
}


export class DisassociateConnectionFromLagHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateConnectionFromLagXAmzTargetEnum;
}


export class DisassociateConnectionFromLagRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateConnectionFromLagHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateConnectionFromLagRequest;
}


export class DisassociateConnectionFromLagResponse extends SpeakeasyBase {
  @Metadata()
  connection?: shared.Connection;

  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  statusCode: number;
}
