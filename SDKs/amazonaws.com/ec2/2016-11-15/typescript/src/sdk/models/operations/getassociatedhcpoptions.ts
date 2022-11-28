import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssociateDhcpOptionsActionEnum {
    AssociateDhcpOptions = "AssociateDhcpOptions"
}

export enum GetAssociateDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateDhcpOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateDhcpOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DhcpOptionsId" })
  dhcpOptionsId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateDhcpOptionsVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetAssociateDhcpOptionsHeaders extends SpeakeasyBase {
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


export class GetAssociateDhcpOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociateDhcpOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssociateDhcpOptionsHeaders;
}


export class GetAssociateDhcpOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
