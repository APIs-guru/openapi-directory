import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetModifyTrafficMirrorSessionActionEnum {
    ModifyTrafficMirrorSession = "ModifyTrafficMirrorSession"
}

export enum GetModifyTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTrafficMirrorSessionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTrafficMirrorSessionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PacketLength" })
  packetLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveField" })
  removeField?: shared.TrafficMirrorSessionFieldEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=SessionNumber" })
  sessionNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" })
  trafficMirrorFilterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorSessionId" })
  trafficMirrorSessionId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorTargetId" })
  trafficMirrorTargetId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTrafficMirrorSessionVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VirtualNetworkId" })
  virtualNetworkId?: number;
}


export class GetModifyTrafficMirrorSessionHeaders extends SpeakeasyBase {
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


export class GetModifyTrafficMirrorSessionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyTrafficMirrorSessionQueryParams;

  @Metadata()
  headers: GetModifyTrafficMirrorSessionHeaders;
}


export class GetModifyTrafficMirrorSessionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
