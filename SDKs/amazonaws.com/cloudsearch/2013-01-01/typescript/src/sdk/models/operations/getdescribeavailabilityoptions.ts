import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeAvailabilityOptionsActionEnum {
    DescribeAvailabilityOptions = "DescribeAvailabilityOptions"
}

export enum GetDescribeAvailabilityOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDescribeAvailabilityOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAvailabilityOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Deployed" })
  deployed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAvailabilityOptionsVersionEnum;
}


export class GetDescribeAvailabilityOptionsHeaders extends SpeakeasyBase {
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


export class GetDescribeAvailabilityOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeAvailabilityOptionsQueryParams;

  @Metadata()
  headers: GetDescribeAvailabilityOptionsHeaders;
}


export class GetDescribeAvailabilityOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
