import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCheckDnsAvailabilityActionEnum {
    CheckDnsAvailability = "CheckDNSAvailability"
}

export enum GetCheckDnsAvailabilityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCheckDnsAvailabilityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCheckDnsAvailabilityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CNAMEPrefix" })
  cnamePrefix: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCheckDnsAvailabilityVersionEnum;
}


export class GetCheckDnsAvailabilityHeaders extends SpeakeasyBase {
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


export class GetCheckDnsAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCheckDnsAvailabilityQueryParams;

  @Metadata()
  headers: GetCheckDnsAvailabilityHeaders;
}


export class GetCheckDnsAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
