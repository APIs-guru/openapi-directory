import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRetrieveEnvironmentInfoActionEnum {
    RetrieveEnvironmentInfo = "RetrieveEnvironmentInfo"
}

export enum GetRetrieveEnvironmentInfoInfoTypeEnum {
    Tail = "tail",
    Bundle = "bundle"
}

export enum GetRetrieveEnvironmentInfoVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetRetrieveEnvironmentInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRetrieveEnvironmentInfoActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InfoType" })
  infoType: GetRetrieveEnvironmentInfoInfoTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRetrieveEnvironmentInfoVersionEnum;
}


export class GetRetrieveEnvironmentInfoHeaders extends SpeakeasyBase {
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


export class GetRetrieveEnvironmentInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRetrieveEnvironmentInfoQueryParams;

  @SpeakeasyMetadata()
  headers: GetRetrieveEnvironmentInfoHeaders;
}


export class GetRetrieveEnvironmentInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
