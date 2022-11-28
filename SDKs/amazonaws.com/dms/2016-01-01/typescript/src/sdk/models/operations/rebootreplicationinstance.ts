import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RebootReplicationInstanceXAmzTargetEnum {
    AmazonDmSv20160101RebootReplicationInstance = "AmazonDMSv20160101.RebootReplicationInstance"
}


export class RebootReplicationInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RebootReplicationInstanceXAmzTargetEnum;
}


export class RebootReplicationInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RebootReplicationInstanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RebootReplicationInstanceMessage;
}


export class RebootReplicationInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  @SpeakeasyMetadata()
  rebootReplicationInstanceResponse?: shared.RebootReplicationInstanceResponse;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
