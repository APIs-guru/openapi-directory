import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetIdentityDkimAttributesActionEnum {
    GetIdentityDkimAttributes = "GetIdentityDkimAttributes"
}

export enum GetGetIdentityDkimAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetIdentityDkimAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetIdentityDkimAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identities" })
  identities: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetIdentityDkimAttributesVersionEnum;
}


export class GetGetIdentityDkimAttributesHeaders extends SpeakeasyBase {
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


export class GetGetIdentityDkimAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetIdentityDkimAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetIdentityDkimAttributesHeaders;
}


export class GetGetIdentityDkimAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
