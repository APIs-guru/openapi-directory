import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEnableImageDeprecationActionEnum {
    EnableImageDeprecation = "EnableImageDeprecation"
}

export enum GetEnableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetEnableImageDeprecationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableImageDeprecationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeprecateAt" })
  deprecateAt: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ImageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableImageDeprecationVersionEnum;
}


export class GetEnableImageDeprecationHeaders extends SpeakeasyBase {
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


export class GetEnableImageDeprecationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEnableImageDeprecationQueryParams;

  @SpeakeasyMetadata()
  headers: GetEnableImageDeprecationHeaders;
}


export class GetEnableImageDeprecationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
