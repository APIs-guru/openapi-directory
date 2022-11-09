import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteInstanceEventWindowActionEnum {
    DeleteInstanceEventWindow = "DeleteInstanceEventWindow"
}

export enum GetDeleteInstanceEventWindowVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteInstanceEventWindowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteInstanceEventWindowActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ForceDelete" })
  forceDelete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceEventWindowId" })
  instanceEventWindowId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteInstanceEventWindowVersionEnum;
}


export class GetDeleteInstanceEventWindowHeaders extends SpeakeasyBase {
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


export class GetDeleteInstanceEventWindowRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteInstanceEventWindowQueryParams;

  @Metadata()
  headers: GetDeleteInstanceEventWindowHeaders;
}


export class GetDeleteInstanceEventWindowResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
