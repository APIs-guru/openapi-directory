import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetDesiredCapacityActionEnum {
    SetDesiredCapacity = "SetDesiredCapacity"
}

export enum GetSetDesiredCapacityVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetSetDesiredCapacityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetDesiredCapacityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DesiredCapacity" })
  desiredCapacity: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HonorCooldown" })
  honorCooldown?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetDesiredCapacityVersionEnum;
}


export class GetSetDesiredCapacityHeaders extends SpeakeasyBase {
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


export class GetSetDesiredCapacityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetDesiredCapacityQueryParams;

  @Metadata()
  headers: GetSetDesiredCapacityHeaders;
}


export class GetSetDesiredCapacityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
