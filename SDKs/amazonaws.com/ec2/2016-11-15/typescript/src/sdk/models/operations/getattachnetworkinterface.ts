import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAttachNetworkInterfaceActionEnum {
    AttachNetworkInterface = "AttachNetworkInterface"
}

export enum GetAttachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAttachNetworkInterfaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachNetworkInterfaceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeviceIndex" })
  deviceIndex: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkCardIndex" })
  networkCardIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachNetworkInterfaceVersionEnum;
}


export class GetAttachNetworkInterfaceHeaders extends SpeakeasyBase {
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


export class GetAttachNetworkInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttachNetworkInterfaceQueryParams;

  @Metadata()
  headers: GetAttachNetworkInterfaceHeaders;
}


export class GetAttachNetworkInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
