import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetIdentityVerificationAttributesActionEnum {
    GetIdentityVerificationAttributes = "GetIdentityVerificationAttributes"
}

export enum GetGetIdentityVerificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetIdentityVerificationAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetIdentityVerificationAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identities" })
  identities: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetIdentityVerificationAttributesVersionEnum;
}


export class GetGetIdentityVerificationAttributesHeaders extends SpeakeasyBase {
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


export class GetGetIdentityVerificationAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetIdentityVerificationAttributesQueryParams;

  @Metadata()
  headers: GetGetIdentityVerificationAttributesHeaders;
}


export class GetGetIdentityVerificationAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
