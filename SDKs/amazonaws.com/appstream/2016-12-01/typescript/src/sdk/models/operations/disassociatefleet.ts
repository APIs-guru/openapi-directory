import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateFleetXAmzTargetEnum {
    PhotonAdminProxyServiceDisassociateFleet = "PhotonAdminProxyService.DisassociateFleet"
}


export class DisassociateFleetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateFleetXAmzTargetEnum;
}


export class DisassociateFleetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateFleetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateFleetRequest;
}


export class DisassociateFleetResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  disassociateFleetResult?: Map<string, any>;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
