import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetModifyTrafficMirrorFilterNetworkServicesActionEnum {
    ModifyTrafficMirrorFilterNetworkServices = "ModifyTrafficMirrorFilterNetworkServices"
}

export enum GetModifyTrafficMirrorFilterNetworkServicesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTrafficMirrorFilterNetworkServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTrafficMirrorFilterNetworkServicesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AddNetworkService" })
  addNetworkService?: shared.TrafficMirrorNetworkServiceEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveNetworkService" })
  removeNetworkService?: shared.TrafficMirrorNetworkServiceEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" })
  trafficMirrorFilterId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTrafficMirrorFilterNetworkServicesVersionEnum;
}


export class GetModifyTrafficMirrorFilterNetworkServicesHeaders extends SpeakeasyBase {
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


export class GetModifyTrafficMirrorFilterNetworkServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyTrafficMirrorFilterNetworkServicesQueryParams;

  @Metadata()
  headers: GetModifyTrafficMirrorFilterNetworkServicesHeaders;
}


export class GetModifyTrafficMirrorFilterNetworkServicesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
