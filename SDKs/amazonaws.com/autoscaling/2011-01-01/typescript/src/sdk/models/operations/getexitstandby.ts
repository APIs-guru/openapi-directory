import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetExitStandbyActionEnum {
    ExitStandby = "ExitStandby"
}

export enum GetExitStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetExitStandbyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetExitStandbyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceIds" })
  instanceIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetExitStandbyVersionEnum;
}


export class GetExitStandbyHeaders extends SpeakeasyBase {
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


export class GetExitStandbyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExitStandbyQueryParams;

  @Metadata()
  headers: GetExitStandbyHeaders;
}


export class GetExitStandbyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
