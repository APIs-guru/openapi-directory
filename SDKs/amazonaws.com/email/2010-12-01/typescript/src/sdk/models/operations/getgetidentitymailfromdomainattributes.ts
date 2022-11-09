import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetIdentityMailFromDomainAttributesActionEnum {
    GetIdentityMailFromDomainAttributes = "GetIdentityMailFromDomainAttributes"
}

export enum GetGetIdentityMailFromDomainAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetIdentityMailFromDomainAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetIdentityMailFromDomainAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identities" })
  identities: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetIdentityMailFromDomainAttributesVersionEnum;
}


export class GetGetIdentityMailFromDomainAttributesHeaders extends SpeakeasyBase {
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


export class GetGetIdentityMailFromDomainAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetIdentityMailFromDomainAttributesQueryParams;

  @Metadata()
  headers: GetGetIdentityMailFromDomainAttributesHeaders;
}


export class GetGetIdentityMailFromDomainAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
