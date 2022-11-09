import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetSshPublicKeyActionEnum {
    GetSshPublicKey = "GetSSHPublicKey"
}

export enum GetGetSshPublicKeyEncodingEnum {
    Ssh = "SSH"
,    Pem = "PEM"
}

export enum GetGetSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetSshPublicKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSshPublicKeyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Encoding" })
  encoding: GetGetSshPublicKeyEncodingEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SSHPublicKeyId" })
  sshPublicKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSshPublicKeyVersionEnum;
}


export class GetGetSshPublicKeyHeaders extends SpeakeasyBase {
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


export class GetGetSshPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetSshPublicKeyQueryParams;

  @Metadata()
  headers: GetGetSshPublicKeyHeaders;
}


export class GetGetSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
