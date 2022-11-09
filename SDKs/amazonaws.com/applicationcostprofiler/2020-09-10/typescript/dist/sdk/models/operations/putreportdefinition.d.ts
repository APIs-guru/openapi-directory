import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutReportDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
export declare class PutReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
export declare enum PutReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV",
    Parquet = "PARQUET"
}
export declare enum PutReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    All = "ALL"
}
export declare class PutReportDefinitionRequestBody extends SpeakeasyBase {
    destinationS3Location: PutReportDefinitionRequestBodyDestinationS3Location;
    format: PutReportDefinitionRequestBodyFormatEnum;
    reportDescription: string;
    reportFrequency: PutReportDefinitionRequestBodyReportFrequencyEnum;
    reportId: string;
}
export declare class PutReportDefinitionRequest extends SpeakeasyBase {
    headers: PutReportDefinitionHeaders;
    request: PutReportDefinitionRequestBody;
}
export declare class PutReportDefinitionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    putReportDefinitionResult?: shared.PutReportDefinitionResult;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
