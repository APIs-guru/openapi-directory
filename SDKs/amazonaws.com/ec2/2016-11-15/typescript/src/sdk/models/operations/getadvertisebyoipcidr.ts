import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAdvertiseByoipCidrActionEnum {
    AdvertiseByoipCidr = "AdvertiseByoipCidr"
}

export enum GetAdvertiseByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAdvertiseByoipCidrQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAdvertiseByoipCidrActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Cidr" })
  cidr: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAdvertiseByoipCidrVersionEnum;
}


export class GetAdvertiseByoipCidrHeaders extends SpeakeasyBase {
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


export class GetAdvertiseByoipCidrRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAdvertiseByoipCidrQueryParams;

  @Metadata()
  headers: GetAdvertiseByoipCidrHeaders;
}


export class GetAdvertiseByoipCidrResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
