import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAttachNetworkInterfaceActionEnum {
    AttachNetworkInterface = "AttachNetworkInterface"
}

export enum GetAttachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAttachNetworkInterfaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachNetworkInterfaceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceIndex" })
  deviceIndex: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkCardIndex" })
  networkCardIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachNetworkInterfaceVersionEnum;
}


export class GetAttachNetworkInterfaceHeaders extends SpeakeasyBase {
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


export class GetAttachNetworkInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAttachNetworkInterfaceQueryParams;

  @SpeakeasyMetadata()
  headers: GetAttachNetworkInterfaceHeaders;
}


export class GetAttachNetworkInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
