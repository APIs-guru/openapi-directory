import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetServiceLastAccessedDetailsActionEnum {
    GetServiceLastAccessedDetails = "GetServiceLastAccessedDetails"
}

export enum GetGetServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetServiceLastAccessedDetailsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetServiceLastAccessedDetailsVersionEnum;
}


export class GetGetServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
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


export class GetGetServiceLastAccessedDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetServiceLastAccessedDetailsQueryParams;

  @Metadata()
  headers: GetGetServiceLastAccessedDetailsHeaders;
}


export class GetGetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
