import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetResetEbsDefaultKmsKeyIdActionEnum {
    ResetEbsDefaultKmsKeyId = "ResetEbsDefaultKmsKeyId"
}

export enum GetResetEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetEbsDefaultKmsKeyIdActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetEbsDefaultKmsKeyIdVersionEnum;
}


export class GetResetEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
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


export class GetResetEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResetEbsDefaultKmsKeyIdQueryParams;

  @Metadata()
  headers: GetResetEbsDefaultKmsKeyIdHeaders;
}


export class GetResetEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
