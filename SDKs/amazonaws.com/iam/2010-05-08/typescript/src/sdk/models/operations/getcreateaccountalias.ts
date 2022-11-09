import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateAccountAliasActionEnum {
    CreateAccountAlias = "CreateAccountAlias"
}

export enum GetCreateAccountAliasVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreateAccountAliasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccountAlias" })
  accountAlias: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateAccountAliasActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateAccountAliasVersionEnum;
}


export class GetCreateAccountAliasHeaders extends SpeakeasyBase {
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


export class GetCreateAccountAliasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateAccountAliasQueryParams;

  @Metadata()
  headers: GetCreateAccountAliasHeaders;
}


export class GetCreateAccountAliasResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
