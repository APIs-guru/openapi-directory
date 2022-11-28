import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetExecutePolicyActionEnum {
    ExecutePolicy = "ExecutePolicy"
}

export enum GetExecutePolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetExecutePolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetExecutePolicyActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BreachThreshold" })
  breachThreshold?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HonorCooldown" })
  honorCooldown?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MetricValue" })
  metricValue?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetExecutePolicyVersionEnum;
}


export class GetExecutePolicyHeaders extends SpeakeasyBase {
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


export class GetExecutePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetExecutePolicyQueryParams;

  @SpeakeasyMetadata()
  headers: GetExecutePolicyHeaders;
}


export class GetExecutePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
