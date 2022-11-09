import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCancelConversionTaskActionEnum {
    CancelConversionTask = "CancelConversionTask"
}

export enum GetCancelConversionTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCancelConversionTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelConversionTaskActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConversionTaskId" })
  conversionTaskId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReasonMessage" })
  reasonMessage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelConversionTaskVersionEnum;
}


export class GetCancelConversionTaskHeaders extends SpeakeasyBase {
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


export class GetCancelConversionTaskRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCancelConversionTaskQueryParams;

  @Metadata()
  headers: GetCancelConversionTaskHeaders;
}


export class GetCancelConversionTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
