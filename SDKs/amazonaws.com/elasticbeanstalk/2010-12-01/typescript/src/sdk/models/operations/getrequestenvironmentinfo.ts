import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRequestEnvironmentInfoActionEnum {
    RequestEnvironmentInfo = "RequestEnvironmentInfo"
}

export enum GetRequestEnvironmentInfoInfoTypeEnum {
    Tail = "tail",
    Bundle = "bundle"
}

export enum GetRequestEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetRequestEnvironmentInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRequestEnvironmentInfoActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InfoType" })
  infoType: GetRequestEnvironmentInfoInfoTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRequestEnvironmentInfoVersionEnum;
}


export class GetRequestEnvironmentInfoHeaders extends SpeakeasyBase {
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


export class GetRequestEnvironmentInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRequestEnvironmentInfoQueryParams;

  @SpeakeasyMetadata()
  headers: GetRequestEnvironmentInfoHeaders;
}


export class GetRequestEnvironmentInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
