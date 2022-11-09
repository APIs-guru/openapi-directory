import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPurchaseReservedInstancesOfferingActionEnum {
    PurchaseReservedInstancesOffering = "PurchaseReservedInstancesOffering"
}


// GetPurchaseReservedInstancesOfferingLimitPrice
/** 
 * Describes the limit price of a Reserved Instance offering.
**/
export class GetPurchaseReservedInstancesOfferingLimitPrice extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Amount" })
  amount?: number;

  @Metadata({ data: "queryParam, name=CurrencyCode" })
  currencyCode?: shared.CurrencyCodeValuesEnum;
}

export enum GetPurchaseReservedInstancesOfferingVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetPurchaseReservedInstancesOfferingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetPurchaseReservedInstancesOfferingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceCount" })
  instanceCount: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LimitPrice" })
  limitPrice?: GetPurchaseReservedInstancesOfferingLimitPrice;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PurchaseTime" })
  purchaseTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReservedInstancesOfferingId" })
  reservedInstancesOfferingId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetPurchaseReservedInstancesOfferingVersionEnum;
}


export class GetPurchaseReservedInstancesOfferingHeaders extends SpeakeasyBase {
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
}


export class GetPurchaseReservedInstancesOfferingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPurchaseReservedInstancesOfferingQueryParams;

  @Metadata()
  headers: GetPurchaseReservedInstancesOfferingHeaders;
}


export class GetPurchaseReservedInstancesOfferingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
