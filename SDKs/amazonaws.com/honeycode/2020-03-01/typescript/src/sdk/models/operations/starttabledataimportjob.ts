import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartTableDataImportJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" })
  tableId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" })
  workbookId: string;
}


export class StartTableDataImportJobHeaders extends SpeakeasyBase {
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

export enum StartTableDataImportJobRequestBodyDataFormatEnum {
    DelimitedText = "DELIMITED_TEXT"
}


// StartTableDataImportJobRequestBodyDataSource
/** 
 * An object that has details about the source of the data that was submitted for import.
**/
export class StartTableDataImportJobRequestBodyDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceConfig" })
  dataSourceConfig?: shared.ImportDataSourceConfig;
}


// StartTableDataImportJobRequestBodyImportOptions
/** 
 * An object that contains the options specified by the sumitter of the import request.
**/
export class StartTableDataImportJobRequestBodyImportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=delimitedTextOptions" })
  delimitedTextOptions?: shared.DelimitedTextImportOptions;

  @Metadata({ data: "json, name=destinationOptions" })
  destinationOptions?: shared.DestinationOptions;
}


export class StartTableDataImportJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=dataFormat" })
  dataFormat: StartTableDataImportJobRequestBodyDataFormatEnum;

  @Metadata({ data: "json, name=dataSource" })
  dataSource: StartTableDataImportJobRequestBodyDataSource;

  @Metadata({ data: "json, name=importOptions" })
  importOptions: StartTableDataImportJobRequestBodyImportOptions;
}


export class StartTableDataImportJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartTableDataImportJobPathParams;

  @Metadata()
  headers: StartTableDataImportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartTableDataImportJobRequestBody;
}


export class StartTableDataImportJobResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  startTableDataImportJobResult?: shared.StartTableDataImportJobResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
