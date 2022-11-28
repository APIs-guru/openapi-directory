import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetDesiredCapacityActionEnum {
    SetDesiredCapacity = "SetDesiredCapacity"
}

export enum GetSetDesiredCapacityVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetSetDesiredCapacityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetDesiredCapacityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DesiredCapacity" })
  desiredCapacity: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HonorCooldown" })
  honorCooldown?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetDesiredCapacityVersionEnum;
}


export class GetSetDesiredCapacityHeaders extends SpeakeasyBase {
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


export class GetSetDesiredCapacityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetDesiredCapacityQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetDesiredCapacityHeaders;
}


export class GetSetDesiredCapacityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
