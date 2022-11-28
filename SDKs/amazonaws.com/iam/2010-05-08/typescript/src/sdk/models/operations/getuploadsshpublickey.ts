import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUploadSshPublicKeyActionEnum {
    UploadSshPublicKey = "UploadSSHPublicKey"
}

export enum GetUploadSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUploadSshPublicKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUploadSshPublicKeyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SSHPublicKeyBody" })
  sshPublicKeyBody: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUploadSshPublicKeyVersionEnum;
}


export class GetUploadSshPublicKeyHeaders extends SpeakeasyBase {
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


export class GetUploadSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUploadSshPublicKeyQueryParams;

  @SpeakeasyMetadata()
  headers: GetUploadSshPublicKeyHeaders;
}


export class GetUploadSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
