import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeRulesActionEnum {
    DescribeRules = "DescribeRules"
}

export enum GetDescribeRulesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetDescribeRulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeRulesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ListenerArn" })
  listenerArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleArns" })
  ruleArns?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeRulesVersionEnum;
}


export class GetDescribeRulesHeaders extends SpeakeasyBase {
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


export class GetDescribeRulesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeRulesQueryParams;

  @Metadata()
  headers: GetDescribeRulesHeaders;
}


export class GetDescribeRulesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
