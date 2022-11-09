import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateConnectionWithLagXAmzTargetEnum {
    OvertureServiceAssociateConnectionWithLag = "OvertureService.AssociateConnectionWithLag"
}


export class AssociateConnectionWithLagHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateConnectionWithLagXAmzTargetEnum;
}


export class AssociateConnectionWithLagRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateConnectionWithLagHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateConnectionWithLagRequest;
}


export class AssociateConnectionWithLagResponse extends SpeakeasyBase {
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
