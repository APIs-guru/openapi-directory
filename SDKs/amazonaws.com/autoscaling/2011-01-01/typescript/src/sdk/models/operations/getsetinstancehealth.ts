import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetInstanceHealthActionEnum {
    SetInstanceHealth = "SetInstanceHealth"
}

export enum GetSetInstanceHealthVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetSetInstanceHealthQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetInstanceHealthActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HealthStatus" })
  healthStatus: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShouldRespectGracePeriod" })
  shouldRespectGracePeriod?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetInstanceHealthVersionEnum;
}


export class GetSetInstanceHealthHeaders extends SpeakeasyBase {
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


export class GetSetInstanceHealthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetInstanceHealthQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetInstanceHealthHeaders;
}


export class GetSetInstanceHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
