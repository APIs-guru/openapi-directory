import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetResetAddressAttributeActionEnum {
    ResetAddressAttribute = "ResetAddressAttribute"
}

export enum GetResetAddressAttributeAttributeEnum {
    DomainName = "domain-name"
}

export enum GetResetAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetAddressAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetAddressAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllocationId" })
  allocationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetResetAddressAttributeAttributeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetAddressAttributeVersionEnum;
}


export class GetResetAddressAttributeHeaders extends SpeakeasyBase {
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


export class GetResetAddressAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResetAddressAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetResetAddressAttributeHeaders;
}


export class GetResetAddressAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
