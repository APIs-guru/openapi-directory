import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteInstanceProfileActionEnum {
    DeleteInstanceProfile = "DeleteInstanceProfile"
}

export enum GetDeleteInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteInstanceProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteInstanceProfileActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" })
  instanceProfileName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteInstanceProfileVersionEnum;
}


export class GetDeleteInstanceProfileHeaders extends SpeakeasyBase {
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


export class GetDeleteInstanceProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteInstanceProfileQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteInstanceProfileHeaders;
}


export class GetDeleteInstanceProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
