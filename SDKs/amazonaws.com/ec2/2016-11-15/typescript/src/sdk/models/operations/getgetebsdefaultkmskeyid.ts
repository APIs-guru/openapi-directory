import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetEbsDefaultKmsKeyIdActionEnum {
    GetEbsDefaultKmsKeyId = "GetEbsDefaultKmsKeyId"
}

export enum GetGetEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetEbsDefaultKmsKeyIdActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetEbsDefaultKmsKeyIdVersionEnum;
}


export class GetGetEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
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


export class GetGetEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetEbsDefaultKmsKeyIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetEbsDefaultKmsKeyIdHeaders;
}


export class GetGetEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
