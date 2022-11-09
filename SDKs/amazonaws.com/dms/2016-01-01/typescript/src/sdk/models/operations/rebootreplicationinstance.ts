import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RebootReplicationInstanceXAmzTargetEnum {
    AmazonDmSv20160101RebootReplicationInstance = "AmazonDMSv20160101.RebootReplicationInstance"
}


export class RebootReplicationInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RebootReplicationInstanceXAmzTargetEnum;
}


export class RebootReplicationInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: RebootReplicationInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RebootReplicationInstanceMessage;
}


export class RebootReplicationInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  rebootReplicationInstanceResponse?: shared.RebootReplicationInstanceResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
