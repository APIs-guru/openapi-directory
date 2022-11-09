import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutReportDefinitionHeaders extends SpeakeasyBase {
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


// PutReportDefinitionRequestBodyDestinationS3Location
/** 
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
export class PutReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}

export enum PutReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV"
,    Parquet = "PARQUET"
}

export enum PutReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY"
,    Daily = "DAILY"
,    All = "ALL"
}


export class PutReportDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationS3Location" })
  destinationS3Location: PutReportDefinitionRequestBodyDestinationS3Location;

  @Metadata({ data: "json, name=format" })
  format: PutReportDefinitionRequestBodyFormatEnum;

  @Metadata({ data: "json, name=reportDescription" })
  reportDescription: string;

  @Metadata({ data: "json, name=reportFrequency" })
  reportFrequency: PutReportDefinitionRequestBodyReportFrequencyEnum;

  @Metadata({ data: "json, name=reportId" })
  reportId: string;
}


export class PutReportDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutReportDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutReportDefinitionRequestBody;
}


export class PutReportDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  putReportDefinitionResult?: shared.PutReportDefinitionResult;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
