import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateSshPublicKeyActionEnum {
    UpdateSshPublicKey = "UpdateSSHPublicKey"
}

export enum GetUpdateSshPublicKeyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}

export enum GetUpdateSshPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateSshPublicKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateSshPublicKeyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SSHPublicKeyId" })
  sshPublicKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdateSshPublicKeyStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateSshPublicKeyVersionEnum;
}


export class GetUpdateSshPublicKeyHeaders extends SpeakeasyBase {
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


export class GetUpdateSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateSshPublicKeyQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateSshPublicKeyHeaders;
}


export class GetUpdateSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
