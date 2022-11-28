import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyUserActionEnum {
    ModifyUser = "ModifyUser"
}

export enum GetModifyUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetModifyUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccessString" })
  accessString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyUserActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AppendAccessString" })
  appendAccessString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NoPasswordRequired" })
  noPasswordRequired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Passwords" })
  passwords?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserId" })
  userId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyUserVersionEnum;
}


export class GetModifyUserHeaders extends SpeakeasyBase {
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


export class GetModifyUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyUserQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyUserHeaders;
}


export class GetModifyUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
