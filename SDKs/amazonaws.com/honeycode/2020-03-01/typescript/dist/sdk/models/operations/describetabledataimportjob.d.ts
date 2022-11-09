import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeTableDataImportJobPathParams extends SpeakeasyBase {
    jobId: string;
    tableId: string;
    workbookId: string;
}
export declare class DescribeTableDataImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeTableDataImportJobRequest extends SpeakeasyBase {
    pathParams: DescribeTableDataImportJobPathParams;
    headers: DescribeTableDataImportJobHeaders;
}
export declare class DescribeTableDataImportJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeTableDataImportJobResult?: shared.DescribeTableDataImportJobResult;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
