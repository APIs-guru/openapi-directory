import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateReportDefinitionPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class UpdateReportDefinitionHeaders extends SpeakeasyBase {
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
export declare class UpdateReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
export declare enum UpdateReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV",
    Parquet = "PARQUET"
}
export declare enum UpdateReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    All = "ALL"
}
export declare class UpdateReportDefinitionRequestBody extends SpeakeasyBase {
    destinationS3Location: UpdateReportDefinitionRequestBodyDestinationS3Location;
    format: UpdateReportDefinitionRequestBodyFormatEnum;
    reportDescription: string;
    reportFrequency: UpdateReportDefinitionRequestBodyReportFrequencyEnum;
}
export declare class UpdateReportDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateReportDefinitionPathParams;
    headers: UpdateReportDefinitionHeaders;
    request: UpdateReportDefinitionRequestBody;
}
export declare class UpdateReportDefinitionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    updateReportDefinitionResult?: shared.UpdateReportDefinitionResult;
    validationException?: any;
}
