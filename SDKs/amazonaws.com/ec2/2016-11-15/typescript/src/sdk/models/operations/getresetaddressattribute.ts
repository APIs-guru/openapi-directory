import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

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
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetAddressAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllocationId" })
  allocationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetResetAddressAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetAddressAttributeVersionEnum;
}


export class GetResetAddressAttributeHeaders extends SpeakeasyBase {
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


export class GetResetAddressAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResetAddressAttributeQueryParams;

  @Metadata()
  headers: GetResetAddressAttributeHeaders;
}


export class GetResetAddressAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
