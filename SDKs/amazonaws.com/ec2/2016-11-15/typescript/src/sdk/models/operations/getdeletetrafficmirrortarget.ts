import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteTrafficMirrorTargetActionEnum {
    DeleteTrafficMirrorTarget = "DeleteTrafficMirrorTarget"
}

export enum GetDeleteTrafficMirrorTargetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteTrafficMirrorTargetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteTrafficMirrorTargetActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorTargetId" })
  trafficMirrorTargetId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteTrafficMirrorTargetVersionEnum;
}


export class GetDeleteTrafficMirrorTargetHeaders extends SpeakeasyBase {
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


export class GetDeleteTrafficMirrorTargetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteTrafficMirrorTargetQueryParams;

  @Metadata()
  headers: GetDeleteTrafficMirrorTargetHeaders;
}


export class GetDeleteTrafficMirrorTargetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
