import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetLaunchTemplateDataActionEnum {
    GetLaunchTemplateData = "GetLaunchTemplateData"
}

export enum PostGetLaunchTemplateDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetLaunchTemplateDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetLaunchTemplateDataActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetLaunchTemplateDataVersionEnum;
}


export class PostGetLaunchTemplateDataHeaders extends SpeakeasyBase {
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


export class PostGetLaunchTemplateDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetLaunchTemplateDataQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetLaunchTemplateDataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetLaunchTemplateDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
