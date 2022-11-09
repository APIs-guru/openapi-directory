import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetResetFpgaImageAttributeActionEnum {
    ResetFpgaImageAttribute = "ResetFpgaImageAttribute"
}

export enum GetResetFpgaImageAttributeAttributeEnum {
    LoadPermission = "loadPermission"
}

export enum GetResetFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetFpgaImageAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetFpgaImageAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute?: GetResetFpgaImageAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FpgaImageId" })
  fpgaImageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetFpgaImageAttributeVersionEnum;
}


export class GetResetFpgaImageAttributeHeaders extends SpeakeasyBase {
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


export class GetResetFpgaImageAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResetFpgaImageAttributeQueryParams;

  @Metadata()
  headers: GetResetFpgaImageAttributeHeaders;
}


export class GetResetFpgaImageAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
