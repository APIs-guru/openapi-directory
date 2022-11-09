import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUploadSshPublicKeyActionEnum {
    UploadSshPublicKey = "UploadSSHPublicKey"
}

export enum GetUploadSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUploadSshPublicKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUploadSshPublicKeyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SSHPublicKeyBody" })
  sshPublicKeyBody: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUploadSshPublicKeyVersionEnum;
}


export class GetUploadSshPublicKeyHeaders extends SpeakeasyBase {
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


export class GetUploadSshPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUploadSshPublicKeyQueryParams;

  @Metadata()
  headers: GetUploadSshPublicKeyHeaders;
}


export class GetUploadSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
