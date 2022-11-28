import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCheckDnsAvailabilityActionEnum {
    CheckDnsAvailability = "CheckDNSAvailability"
}

export enum GetCheckDnsAvailabilityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCheckDnsAvailabilityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCheckDnsAvailabilityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CNAMEPrefix" })
  cnamePrefix: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCheckDnsAvailabilityVersionEnum;
}


export class GetCheckDnsAvailabilityHeaders extends SpeakeasyBase {
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


export class GetCheckDnsAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCheckDnsAvailabilityQueryParams;

  @SpeakeasyMetadata()
  headers: GetCheckDnsAvailabilityHeaders;
}


export class GetCheckDnsAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
