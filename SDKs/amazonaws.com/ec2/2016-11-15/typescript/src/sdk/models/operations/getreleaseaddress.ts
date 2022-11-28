import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetReleaseAddressActionEnum {
    ReleaseAddress = "ReleaseAddress"
}

export enum GetReleaseAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReleaseAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReleaseAddressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllocationId" })
  allocationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkBorderGroup" })
  networkBorderGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReleaseAddressVersionEnum;
}


export class GetReleaseAddressHeaders extends SpeakeasyBase {
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


export class GetReleaseAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReleaseAddressQueryParams;

  @SpeakeasyMetadata()
  headers: GetReleaseAddressHeaders;
}


export class GetReleaseAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
