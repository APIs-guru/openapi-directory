import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyIdentityIdFormatActionEnum {
    ModifyIdentityIdFormat = "ModifyIdentityIdFormat"
}

export enum GetModifyIdentityIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyIdentityIdFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyIdentityIdFormatActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrincipalArn" })
  principalArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UseLongIds" })
  useLongIds: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyIdentityIdFormatVersionEnum;
}


export class GetModifyIdentityIdFormatHeaders extends SpeakeasyBase {
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


export class GetModifyIdentityIdFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyIdentityIdFormatQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyIdentityIdFormatHeaders;
}


export class GetModifyIdentityIdFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
