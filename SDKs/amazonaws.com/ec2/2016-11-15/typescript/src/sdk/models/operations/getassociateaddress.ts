import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssociateAddressActionEnum {
    AssociateAddress = "AssociateAddress"
}

export enum GetAssociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateAddressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateAddressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllocationId" })
  allocationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowReassociation" })
  allowReassociation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateAddressVersionEnum;
}


export class GetAssociateAddressHeaders extends SpeakeasyBase {
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


export class GetAssociateAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociateAddressQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssociateAddressHeaders;
}


export class GetAssociateAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
