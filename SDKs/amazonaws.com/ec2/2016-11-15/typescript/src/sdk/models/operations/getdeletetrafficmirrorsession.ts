import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteTrafficMirrorSessionActionEnum {
    DeleteTrafficMirrorSession = "DeleteTrafficMirrorSession"
}

export enum GetDeleteTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteTrafficMirrorSessionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteTrafficMirrorSessionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorSessionId" })
  trafficMirrorSessionId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteTrafficMirrorSessionVersionEnum;
}


export class GetDeleteTrafficMirrorSessionHeaders extends SpeakeasyBase {
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


export class GetDeleteTrafficMirrorSessionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteTrafficMirrorSessionQueryParams;

  @Metadata()
  headers: GetDeleteTrafficMirrorSessionHeaders;
}


export class GetDeleteTrafficMirrorSessionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
