import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyEbsDefaultKmsKeyIdActionEnum {
    ModifyEbsDefaultKmsKeyId = "ModifyEbsDefaultKmsKeyId"
}

export enum GetModifyEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyEbsDefaultKmsKeyIdActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyEbsDefaultKmsKeyIdVersionEnum;
}


export class GetModifyEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
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


export class GetModifyEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyEbsDefaultKmsKeyIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyEbsDefaultKmsKeyIdHeaders;
}


export class GetModifyEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
