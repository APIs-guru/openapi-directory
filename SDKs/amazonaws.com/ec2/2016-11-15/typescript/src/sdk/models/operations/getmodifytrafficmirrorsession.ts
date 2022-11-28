import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetModifyTrafficMirrorSessionActionEnum {
    ModifyTrafficMirrorSession = "ModifyTrafficMirrorSession"
}

export enum GetModifyTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTrafficMirrorSessionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTrafficMirrorSessionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PacketLength" })
  packetLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveField" })
  removeField?: shared.TrafficMirrorSessionFieldEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SessionNumber" })
  sessionNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" })
  trafficMirrorFilterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorSessionId" })
  trafficMirrorSessionId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorTargetId" })
  trafficMirrorTargetId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTrafficMirrorSessionVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VirtualNetworkId" })
  virtualNetworkId?: number;
}


export class GetModifyTrafficMirrorSessionHeaders extends SpeakeasyBase {
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


export class GetModifyTrafficMirrorSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyTrafficMirrorSessionQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyTrafficMirrorSessionHeaders;
}


export class GetModifyTrafficMirrorSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
