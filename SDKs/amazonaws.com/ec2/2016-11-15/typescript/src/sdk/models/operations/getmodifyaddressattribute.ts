import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyAddressAttributeActionEnum {
    ModifyAddressAttribute = "ModifyAddressAttribute"
}

export enum GetModifyAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyAddressAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyAddressAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllocationId" })
  allocationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyAddressAttributeVersionEnum;
}


export class GetModifyAddressAttributeHeaders extends SpeakeasyBase {
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


export class GetModifyAddressAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyAddressAttributeQueryParams;

  @Metadata()
  headers: GetModifyAddressAttributeHeaders;
}


export class GetModifyAddressAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
