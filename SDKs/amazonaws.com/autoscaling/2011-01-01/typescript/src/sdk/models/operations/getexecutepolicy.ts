import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetExecutePolicyActionEnum {
    ExecutePolicy = "ExecutePolicy"
}

export enum GetExecutePolicyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetExecutePolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetExecutePolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BreachThreshold" })
  breachThreshold?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HonorCooldown" })
  honorCooldown?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MetricValue" })
  metricValue?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetExecutePolicyVersionEnum;
}


export class GetExecutePolicyHeaders extends SpeakeasyBase {
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


export class GetExecutePolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExecutePolicyQueryParams;

  @Metadata()
  headers: GetExecutePolicyHeaders;
}


export class GetExecutePolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
