import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetPolicyVersionActionEnum {
    GetPolicyVersion = "GetPolicyVersion"
}

export enum GetGetPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetPolicyVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetPolicyVersionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetPolicyVersionVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VersionId" })
  versionId: string;
}


export class GetGetPolicyVersionHeaders extends SpeakeasyBase {
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


export class GetGetPolicyVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetPolicyVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetPolicyVersionHeaders;
}


export class GetGetPolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
