import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostUpdateAvailabilityOptionsActionEnum {
    UpdateAvailabilityOptions = "UpdateAvailabilityOptions"
}

export enum PostUpdateAvailabilityOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class PostUpdateAvailabilityOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdateAvailabilityOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdateAvailabilityOptionsVersionEnum;
}


export class PostUpdateAvailabilityOptionsHeaders extends SpeakeasyBase {
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


export class PostUpdateAvailabilityOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUpdateAvailabilityOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: PostUpdateAvailabilityOptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdateAvailabilityOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
