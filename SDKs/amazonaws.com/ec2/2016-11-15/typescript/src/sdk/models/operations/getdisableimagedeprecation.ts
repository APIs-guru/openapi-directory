import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisableImageDeprecationActionEnum {
    DisableImageDeprecation = "DisableImageDeprecation"
}

export enum GetDisableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisableImageDeprecationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableImageDeprecationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ImageId" })
  imageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableImageDeprecationVersionEnum;
}


export class GetDisableImageDeprecationHeaders extends SpeakeasyBase {
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


export class GetDisableImageDeprecationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisableImageDeprecationQueryParams;

  @Metadata()
  headers: GetDisableImageDeprecationHeaders;
}


export class GetDisableImageDeprecationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
