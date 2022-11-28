import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEnterStandbyActionEnum {
    EnterStandby = "EnterStandby"
}

export enum GetEnterStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetEnterStandbyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnterStandbyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceIds" })
  instanceIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShouldDecrementDesiredCapacity" })
  shouldDecrementDesiredCapacity: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnterStandbyVersionEnum;
}


export class GetEnterStandbyHeaders extends SpeakeasyBase {
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


export class GetEnterStandbyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEnterStandbyQueryParams;

  @SpeakeasyMetadata()
  headers: GetEnterStandbyHeaders;
}


export class GetEnterStandbyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
