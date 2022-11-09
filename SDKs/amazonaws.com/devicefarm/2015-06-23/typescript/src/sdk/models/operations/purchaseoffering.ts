import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PurchaseOfferingXAmzTargetEnum {
    DeviceFarm20150623PurchaseOffering = "DeviceFarm_20150623.PurchaseOffering"
}


export class PurchaseOfferingHeaders extends SpeakeasyBase {
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
  xAmzTarget: PurchaseOfferingXAmzTargetEnum;
}


export class PurchaseOfferingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PurchaseOfferingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PurchaseOfferingRequest;
}


export class PurchaseOfferingResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notEligibleException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  purchaseOfferingResult?: shared.PurchaseOfferingResult;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}
