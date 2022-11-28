import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetIdentityVerificationAttributesActionEnum {
    GetIdentityVerificationAttributes = "GetIdentityVerificationAttributes"
}

export enum GetGetIdentityVerificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetIdentityVerificationAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetIdentityVerificationAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identities" })
  identities: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetIdentityVerificationAttributesVersionEnum;
}


export class GetGetIdentityVerificationAttributesHeaders extends SpeakeasyBase {
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


export class GetGetIdentityVerificationAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetIdentityVerificationAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetIdentityVerificationAttributesHeaders;
}


export class GetGetIdentityVerificationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
