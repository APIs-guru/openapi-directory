import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableImageDeprecationActionEnum {
    EnableImageDeprecation = "EnableImageDeprecation"
}

export enum GetEnableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetEnableImageDeprecationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableImageDeprecationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeprecateAt" })
  deprecateAt: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ImageId" })
  imageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableImageDeprecationVersionEnum;
}


export class GetEnableImageDeprecationHeaders extends SpeakeasyBase {
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


export class GetEnableImageDeprecationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableImageDeprecationQueryParams;

  @Metadata()
  headers: GetEnableImageDeprecationHeaders;
}


export class GetEnableImageDeprecationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
