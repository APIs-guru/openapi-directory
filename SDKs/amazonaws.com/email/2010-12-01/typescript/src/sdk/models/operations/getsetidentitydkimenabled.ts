import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetIdentityDkimEnabledActionEnum {
    SetIdentityDkimEnabled = "SetIdentityDkimEnabled"
}

export enum GetSetIdentityDkimEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSetIdentityDkimEnabledQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetIdentityDkimEnabledActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DkimEnabled" })
  dkimEnabled: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetIdentityDkimEnabledVersionEnum;
}


export class GetSetIdentityDkimEnabledHeaders extends SpeakeasyBase {
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


export class GetSetIdentityDkimEnabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetIdentityDkimEnabledQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetIdentityDkimEnabledHeaders;
}


export class GetSetIdentityDkimEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
