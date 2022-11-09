import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteTargetGroupActionEnum {
    DeleteTargetGroup = "DeleteTargetGroup"
}

export enum GetDeleteTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetDeleteTargetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteTargetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArn" })
  targetGroupArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteTargetGroupVersionEnum;
}


export class GetDeleteTargetGroupHeaders extends SpeakeasyBase {
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


export class GetDeleteTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteTargetGroupQueryParams;

  @Metadata()
  headers: GetDeleteTargetGroupHeaders;
}


export class GetDeleteTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
