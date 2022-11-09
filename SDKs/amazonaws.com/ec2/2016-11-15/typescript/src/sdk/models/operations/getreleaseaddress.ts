import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReleaseAddressActionEnum {
    ReleaseAddress = "ReleaseAddress"
}

export enum GetReleaseAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReleaseAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReleaseAddressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllocationId" })
  allocationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkBorderGroup" })
  networkBorderGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PublicIp" })
  publicIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReleaseAddressVersionEnum;
}


export class GetReleaseAddressHeaders extends SpeakeasyBase {
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


export class GetReleaseAddressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReleaseAddressQueryParams;

  @Metadata()
  headers: GetReleaseAddressHeaders;
}


export class GetReleaseAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
