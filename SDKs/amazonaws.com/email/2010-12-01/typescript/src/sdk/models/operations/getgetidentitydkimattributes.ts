import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetIdentityDkimAttributesActionEnum {
    GetIdentityDkimAttributes = "GetIdentityDkimAttributes"
}

export enum GetGetIdentityDkimAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetIdentityDkimAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetIdentityDkimAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identities" })
  identities: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetIdentityDkimAttributesVersionEnum;
}


export class GetGetIdentityDkimAttributesHeaders extends SpeakeasyBase {
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


export class GetGetIdentityDkimAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetIdentityDkimAttributesQueryParams;

  @Metadata()
  headers: GetGetIdentityDkimAttributesHeaders;
}


export class GetGetIdentityDkimAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
