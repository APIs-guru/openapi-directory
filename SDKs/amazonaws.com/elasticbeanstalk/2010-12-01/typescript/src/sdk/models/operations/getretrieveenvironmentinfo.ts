import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRetrieveEnvironmentInfoActionEnum {
    RetrieveEnvironmentInfo = "RetrieveEnvironmentInfo"
}

export enum GetRetrieveEnvironmentInfoInfoTypeEnum {
    Tail = "tail"
,    Bundle = "bundle"
}

export enum GetRetrieveEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetRetrieveEnvironmentInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRetrieveEnvironmentInfoActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InfoType" })
  infoType: GetRetrieveEnvironmentInfoInfoTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRetrieveEnvironmentInfoVersionEnum;
}


export class GetRetrieveEnvironmentInfoHeaders extends SpeakeasyBase {
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


export class GetRetrieveEnvironmentInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRetrieveEnvironmentInfoQueryParams;

  @Metadata()
  headers: GetRetrieveEnvironmentInfoHeaders;
}


export class GetRetrieveEnvironmentInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
