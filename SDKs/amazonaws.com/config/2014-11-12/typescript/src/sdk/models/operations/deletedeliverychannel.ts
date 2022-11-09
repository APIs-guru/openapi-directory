import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteDeliveryChannelXAmzTargetEnum {
    StarlingDoveServiceDeleteDeliveryChannel = "StarlingDoveService.DeleteDeliveryChannel"
}


export class DeleteDeliveryChannelHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteDeliveryChannelXAmzTargetEnum;
}


export class DeleteDeliveryChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDeliveryChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDeliveryChannelRequest;
}


export class DeleteDeliveryChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lastDeliveryChannelDeleteFailedException?: any;

  @Metadata()
  noSuchDeliveryChannelException?: any;

  @Metadata()
  statusCode: number;
}
