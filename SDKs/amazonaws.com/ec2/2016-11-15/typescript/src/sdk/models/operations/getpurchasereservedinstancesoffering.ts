import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPurchaseReservedInstancesOfferingActionEnum {
    PurchaseReservedInstancesOffering = "PurchaseReservedInstancesOffering"
}


// GetPurchaseReservedInstancesOfferingLimitPrice
/** 
 * Describes the limit price of a Reserved Instance offering.
**/
export class GetPurchaseReservedInstancesOfferingLimitPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=CurrencyCode" })
  currencyCode?: shared.CurrencyCodeValuesEnum;
}

export enum GetPurchaseReservedInstancesOfferingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetPurchaseReservedInstancesOfferingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPurchaseReservedInstancesOfferingActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceCount" })
  instanceCount: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LimitPrice" })
  limitPrice?: GetPurchaseReservedInstancesOfferingLimitPrice;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PurchaseTime" })
  purchaseTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedInstancesOfferingId" })
  reservedInstancesOfferingId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPurchaseReservedInstancesOfferingVersionEnum;
}


export class GetPurchaseReservedInstancesOfferingHeaders extends SpeakeasyBase {
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
}


export class GetPurchaseReservedInstancesOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPurchaseReservedInstancesOfferingQueryParams;

  @SpeakeasyMetadata()
  headers: GetPurchaseReservedInstancesOfferingHeaders;
}


export class GetPurchaseReservedInstancesOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
