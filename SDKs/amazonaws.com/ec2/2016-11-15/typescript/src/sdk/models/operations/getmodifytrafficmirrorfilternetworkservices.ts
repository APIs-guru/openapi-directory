import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetModifyTrafficMirrorFilterNetworkServicesActionEnum {
    ModifyTrafficMirrorFilterNetworkServices = "ModifyTrafficMirrorFilterNetworkServices"
}

export enum GetModifyTrafficMirrorFilterNetworkServicesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTrafficMirrorFilterNetworkServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTrafficMirrorFilterNetworkServicesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AddNetworkService" })
  addNetworkService?: shared.TrafficMirrorNetworkServiceEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveNetworkService" })
  removeNetworkService?: shared.TrafficMirrorNetworkServiceEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" })
  trafficMirrorFilterId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTrafficMirrorFilterNetworkServicesVersionEnum;
}


export class GetModifyTrafficMirrorFilterNetworkServicesHeaders extends SpeakeasyBase {
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


export class GetModifyTrafficMirrorFilterNetworkServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyTrafficMirrorFilterNetworkServicesQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyTrafficMirrorFilterNetworkServicesHeaders;
}


export class GetModifyTrafficMirrorFilterNetworkServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
