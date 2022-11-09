import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCancelImportTaskActionEnum {
    CancelImportTask = "CancelImportTask"
}

export enum GetCancelImportTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCancelImportTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCancelImportTaskActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CancelReason" })
  cancelReason?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ImportTaskId" })
  importTaskId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCancelImportTaskVersionEnum;
}


export class GetCancelImportTaskHeaders extends SpeakeasyBase {
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


export class GetCancelImportTaskRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCancelImportTaskQueryParams;

  @Metadata()
  headers: GetCancelImportTaskHeaders;
}


export class GetCancelImportTaskResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
