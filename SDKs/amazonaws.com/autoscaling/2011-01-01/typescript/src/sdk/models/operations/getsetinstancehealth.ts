import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetInstanceHealthActionEnum {
    SetInstanceHealth = "SetInstanceHealth"
}

export enum GetSetInstanceHealthVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetSetInstanceHealthQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetInstanceHealthActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HealthStatus" })
  healthStatus: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ShouldRespectGracePeriod" })
  shouldRespectGracePeriod?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetInstanceHealthVersionEnum;
}


export class GetSetInstanceHealthHeaders extends SpeakeasyBase {
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


export class GetSetInstanceHealthRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetInstanceHealthQueryParams;

  @Metadata()
  headers: GetSetInstanceHealthHeaders;
}


export class GetSetInstanceHealthResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
