import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateAddressActionEnum {
    AssociateAddress = "AssociateAddress"
}

export enum GetAssociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateAddressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateAddressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllocationId" })
  allocationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllowReassociation" })
  allowReassociation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrivateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PublicIp" })
  publicIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateAddressVersionEnum;
}


export class GetAssociateAddressHeaders extends SpeakeasyBase {
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


export class GetAssociateAddressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateAddressQueryParams;

  @Metadata()
  headers: GetAssociateAddressHeaders;
}


export class GetAssociateAddressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
