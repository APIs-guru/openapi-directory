import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartTableDataImportJobPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class StartTableDataImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum StartTableDataImportJobRequestBodyDataFormatEnum {
    DelimitedText = "DELIMITED_TEXT"
}
/**
 * An object that has details about the source of the data that was submitted for import.
**/
export declare class StartTableDataImportJobRequestBodyDataSource extends SpeakeasyBase {
    dataSourceConfig?: shared.ImportDataSourceConfig;
}
/**
 * An object that contains the options specified by the sumitter of the import request.
**/
export declare class StartTableDataImportJobRequestBodyImportOptions extends SpeakeasyBase {
    delimitedTextOptions?: shared.DelimitedTextImportOptions;
    destinationOptions?: shared.DestinationOptions;
}
export declare class StartTableDataImportJobRequestBody extends SpeakeasyBase {
    clientRequestToken: string;
    dataFormat: StartTableDataImportJobRequestBodyDataFormatEnum;
    dataSource: StartTableDataImportJobRequestBodyDataSource;
    importOptions: StartTableDataImportJobRequestBodyImportOptions;
}
export declare class StartTableDataImportJobRequest extends SpeakeasyBase {
    pathParams: StartTableDataImportJobPathParams;
    headers: StartTableDataImportJobHeaders;
    request: StartTableDataImportJobRequestBody;
}
export declare class StartTableDataImportJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    startTableDataImportJobResult?: shared.StartTableDataImportJobResult;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
