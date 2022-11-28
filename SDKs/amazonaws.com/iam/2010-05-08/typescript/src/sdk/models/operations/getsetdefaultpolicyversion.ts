import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetDefaultPolicyVersionActionEnum {
    SetDefaultPolicyVersion = "SetDefaultPolicyVersion"
}

export enum GetSetDefaultPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetSetDefaultPolicyVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetDefaultPolicyVersionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetDefaultPolicyVersionVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VersionId" })
  versionId: string;
}


export class GetSetDefaultPolicyVersionHeaders extends SpeakeasyBase {
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


export class GetSetDefaultPolicyVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetDefaultPolicyVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetDefaultPolicyVersionHeaders;
}


export class GetSetDefaultPolicyVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
