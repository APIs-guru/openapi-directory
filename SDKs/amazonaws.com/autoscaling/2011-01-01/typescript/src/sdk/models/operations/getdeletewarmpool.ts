import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteWarmPoolActionEnum {
    DeleteWarmPool = "DeleteWarmPool"
}

export enum GetDeleteWarmPoolVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDeleteWarmPoolQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteWarmPoolActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ForceDelete" })
  forceDelete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteWarmPoolVersionEnum;
}


export class GetDeleteWarmPoolHeaders extends SpeakeasyBase {
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


export class GetDeleteWarmPoolRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteWarmPoolQueryParams;

  @Metadata()
  headers: GetDeleteWarmPoolHeaders;
}


export class GetDeleteWarmPoolResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
