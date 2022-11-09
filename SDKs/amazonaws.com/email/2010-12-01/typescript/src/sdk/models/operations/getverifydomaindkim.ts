import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetVerifyDomainDkimActionEnum {
    VerifyDomainDkim = "VerifyDomainDkim"
}

export enum GetVerifyDomainDkimVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetVerifyDomainDkimQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetVerifyDomainDkimActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Domain" })
  domain: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetVerifyDomainDkimVersionEnum;
}


export class GetVerifyDomainDkimHeaders extends SpeakeasyBase {
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


export class GetVerifyDomainDkimRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVerifyDomainDkimQueryParams;

  @Metadata()
  headers: GetVerifyDomainDkimHeaders;
}


export class GetVerifyDomainDkimResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
