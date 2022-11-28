import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartTableDataImportJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" })
  tableId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workbookId" })
  workbookId: string;
}


export class StartTableDataImportJobHeaders extends SpeakeasyBase {
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

export enum StartTableDataImportJobRequestBodyDataFormatEnum {
    DelimitedText = "DELIMITED_TEXT"
}


// StartTableDataImportJobRequestBodyDataSource
/** 
 * An object that has details about the source of the data that was submitted for import.
**/
export class StartTableDataImportJobRequestBodyDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceConfig" })
  dataSourceConfig?: shared.ImportDataSourceConfig;
}


// StartTableDataImportJobRequestBodyImportOptions
/** 
 * An object that contains the options specified by the sumitter of the import request.
**/
export class StartTableDataImportJobRequestBodyImportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delimitedTextOptions" })
  delimitedTextOptions?: shared.DelimitedTextImportOptions;

  @SpeakeasyMetadata({ data: "json, name=destinationOptions" })
  destinationOptions?: shared.DestinationOptions;
}


export class StartTableDataImportJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=dataFormat" })
  dataFormat: StartTableDataImportJobRequestBodyDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource: StartTableDataImportJobRequestBodyDataSource;

  @SpeakeasyMetadata({ data: "json, name=importOptions" })
  importOptions: StartTableDataImportJobRequestBodyImportOptions;
}


export class StartTableDataImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartTableDataImportJobPathParams;

  @SpeakeasyMetadata()
  headers: StartTableDataImportJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartTableDataImportJobRequestBody;
}


export class StartTableDataImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  startTableDataImportJobResult?: shared.StartTableDataImportJobResult;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
