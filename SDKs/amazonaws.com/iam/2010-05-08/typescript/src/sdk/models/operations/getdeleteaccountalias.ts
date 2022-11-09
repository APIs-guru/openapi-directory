import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteAccountAliasActionEnum {
    DeleteAccountAlias = "DeleteAccountAlias"
}

export enum GetDeleteAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteAccountAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccountAlias" })
  accountAlias: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteAccountAliasActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteAccountAliasVersionEnum;
}


export class GetDeleteAccountAliasHeaders extends SpeakeasyBase {
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


export class GetDeleteAccountAliasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteAccountAliasQueryParams;

  @Metadata()
  headers: GetDeleteAccountAliasHeaders;
}


export class GetDeleteAccountAliasResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
