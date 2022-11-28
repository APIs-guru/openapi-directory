import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetAccountPasswordPolicyActionEnum {
    GetAccountPasswordPolicy = "GetAccountPasswordPolicy"
}

export enum PostGetAccountPasswordPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostGetAccountPasswordPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAccountPasswordPolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAccountPasswordPolicyVersionEnum;
}


export class PostGetAccountPasswordPolicyHeaders extends SpeakeasyBase {
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


export class PostGetAccountPasswordPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetAccountPasswordPolicyQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetAccountPasswordPolicyHeaders;
}


export class PostGetAccountPasswordPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
