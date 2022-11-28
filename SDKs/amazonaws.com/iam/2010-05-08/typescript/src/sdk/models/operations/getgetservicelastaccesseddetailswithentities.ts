import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetServiceLastAccessedDetailsWithEntitiesActionEnum {
    GetServiceLastAccessedDetailsWithEntities = "GetServiceLastAccessedDetailsWithEntities"
}

export enum GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetServiceLastAccessedDetailsWithEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetServiceLastAccessedDetailsWithEntitiesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServiceNamespace" })
  serviceNamespace: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum;
}


export class GetGetServiceLastAccessedDetailsWithEntitiesHeaders extends SpeakeasyBase {
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


export class GetGetServiceLastAccessedDetailsWithEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetServiceLastAccessedDetailsWithEntitiesQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetServiceLastAccessedDetailsWithEntitiesHeaders;
}


export class GetGetServiceLastAccessedDetailsWithEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
