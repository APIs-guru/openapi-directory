import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetServiceLastAccessedDetailsActionEnum {
    GetServiceLastAccessedDetails = "GetServiceLastAccessedDetails"
}

export enum GetGetServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetServiceLastAccessedDetailsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetServiceLastAccessedDetailsVersionEnum;
}


export class GetGetServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
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


export class GetGetServiceLastAccessedDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetServiceLastAccessedDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetServiceLastAccessedDetailsHeaders;
}


export class GetGetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
