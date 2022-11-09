import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRequestEnvironmentInfoActionEnum {
    RequestEnvironmentInfo = "RequestEnvironmentInfo"
}

export enum GetRequestEnvironmentInfoInfoTypeEnum {
    Tail = "tail"
,    Bundle = "bundle"
}

export enum GetRequestEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetRequestEnvironmentInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRequestEnvironmentInfoActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InfoType" })
  infoType: GetRequestEnvironmentInfoInfoTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRequestEnvironmentInfoVersionEnum;
}


export class GetRequestEnvironmentInfoHeaders extends SpeakeasyBase {
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


export class GetRequestEnvironmentInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRequestEnvironmentInfoQueryParams;

  @Metadata()
  headers: GetRequestEnvironmentInfoHeaders;
}


export class GetRequestEnvironmentInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
