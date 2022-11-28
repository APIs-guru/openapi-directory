import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetReleaseHostsActionEnum {
    ReleaseHosts = "ReleaseHosts"
}

export enum GetReleaseHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReleaseHostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReleaseHostsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostId" })
  hostId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReleaseHostsVersionEnum;
}


export class GetReleaseHostsHeaders extends SpeakeasyBase {
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


export class GetReleaseHostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReleaseHostsQueryParams;

  @SpeakeasyMetadata()
  headers: GetReleaseHostsHeaders;
}


export class GetReleaseHostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
