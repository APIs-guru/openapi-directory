import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AllowCustomRoutingTrafficXAmzTargetEnum {
    GlobalAcceleratorV20180706AllowCustomRoutingTraffic = "GlobalAccelerator_V20180706.AllowCustomRoutingTraffic"
}


export class AllowCustomRoutingTrafficHeaders extends SpeakeasyBase {
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
  xAmzTarget: AllowCustomRoutingTrafficXAmzTargetEnum;
}


export class AllowCustomRoutingTrafficRequest extends SpeakeasyBase {
  @Metadata()
  headers: AllowCustomRoutingTrafficHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AllowCustomRoutingTrafficRequest;
}


export class AllowCustomRoutingTrafficResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  statusCode: number;
}
