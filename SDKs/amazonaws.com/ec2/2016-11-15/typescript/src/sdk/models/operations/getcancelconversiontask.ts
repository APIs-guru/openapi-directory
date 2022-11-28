import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCancelConversionTaskActionEnum {
    CancelConversionTask = "CancelConversionTask"
}

export enum GetCancelConversionTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCancelConversionTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelConversionTaskActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConversionTaskId" })
  conversionTaskId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReasonMessage" })
  reasonMessage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelConversionTaskVersionEnum;
}


export class GetCancelConversionTaskHeaders extends SpeakeasyBase {
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


export class GetCancelConversionTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCancelConversionTaskQueryParams;

  @SpeakeasyMetadata()
  headers: GetCancelConversionTaskHeaders;
}


export class GetCancelConversionTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
