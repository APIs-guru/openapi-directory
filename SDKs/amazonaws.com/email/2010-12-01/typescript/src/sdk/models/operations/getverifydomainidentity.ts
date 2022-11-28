import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetVerifyDomainIdentityActionEnum {
    VerifyDomainIdentity = "VerifyDomainIdentity"
}

export enum GetVerifyDomainIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetVerifyDomainIdentityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetVerifyDomainIdentityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetVerifyDomainIdentityVersionEnum;
}


export class GetVerifyDomainIdentityHeaders extends SpeakeasyBase {
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


export class GetVerifyDomainIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVerifyDomainIdentityQueryParams;

  @SpeakeasyMetadata()
  headers: GetVerifyDomainIdentityHeaders;
}


export class GetVerifyDomainIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
