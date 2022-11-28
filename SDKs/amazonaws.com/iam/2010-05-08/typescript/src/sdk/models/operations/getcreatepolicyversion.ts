import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreatePolicyVersionActionEnum {
    CreatePolicyVersion = "CreatePolicyVersion"
}

export enum GetCreatePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreatePolicyVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreatePolicyVersionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SetAsDefault" })
  setAsDefault?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreatePolicyVersionVersionEnum;
}


export class GetCreatePolicyVersionHeaders extends SpeakeasyBase {
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


export class GetCreatePolicyVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreatePolicyVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreatePolicyVersionHeaders;
}


export class GetCreatePolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
