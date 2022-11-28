import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}

export enum GetCancelExportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCancelExportTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelExportTaskActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExportTaskId" })
  exportTaskId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelExportTaskVersionEnum;
}


export class GetCancelExportTaskHeaders extends SpeakeasyBase {
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


export class GetCancelExportTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCancelExportTaskQueryParams;

  @SpeakeasyMetadata()
  headers: GetCancelExportTaskHeaders;
}


export class GetCancelExportTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
