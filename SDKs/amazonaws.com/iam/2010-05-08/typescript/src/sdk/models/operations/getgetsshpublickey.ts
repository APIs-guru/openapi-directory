import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetSshPublicKeyActionEnum {
    GetSshPublicKey = "GetSSHPublicKey"
}

export enum GetGetSshPublicKeyEncodingEnum {
    Ssh = "SSH",
    Pem = "PEM"
}

export enum GetGetSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetSshPublicKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSshPublicKeyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Encoding" })
  encoding: GetGetSshPublicKeyEncodingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SSHPublicKeyId" })
  sshPublicKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSshPublicKeyVersionEnum;
}


export class GetGetSshPublicKeyHeaders extends SpeakeasyBase {
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


export class GetGetSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetSshPublicKeyQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetSshPublicKeyHeaders;
}


export class GetGetSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
