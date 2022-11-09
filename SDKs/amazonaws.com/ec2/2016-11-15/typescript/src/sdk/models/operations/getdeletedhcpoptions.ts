import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteDhcpOptionsActionEnum {
    DeleteDhcpOptions = "DeleteDhcpOptions"
}

export enum GetDeleteDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteDhcpOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteDhcpOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DhcpOptionsId" })
  dhcpOptionsId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteDhcpOptionsVersionEnum;
}


export class GetDeleteDhcpOptionsHeaders extends SpeakeasyBase {
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


export class GetDeleteDhcpOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteDhcpOptionsQueryParams;

  @Metadata()
  headers: GetDeleteDhcpOptionsHeaders;
}


export class GetDeleteDhcpOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
