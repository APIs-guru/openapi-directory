import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateReportDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;
}


export class UpdateReportDefinitionHeaders extends SpeakeasyBase {
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


// UpdateReportDefinitionRequestBodyDestinationS3Location
/** 
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
export class UpdateReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}

export enum UpdateReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV"
,    Parquet = "PARQUET"
}

export enum UpdateReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY"
,    Daily = "DAILY"
,    All = "ALL"
}


export class UpdateReportDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationS3Location" })
  destinationS3Location: UpdateReportDefinitionRequestBodyDestinationS3Location;

  @Metadata({ data: "json, name=format" })
  format: UpdateReportDefinitionRequestBodyFormatEnum;

  @Metadata({ data: "json, name=reportDescription" })
  reportDescription: string;

  @Metadata({ data: "json, name=reportFrequency" })
  reportFrequency: UpdateReportDefinitionRequestBodyReportFrequencyEnum;
}


export class UpdateReportDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateReportDefinitionPathParams;

  @Metadata()
  headers: UpdateReportDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateReportDefinitionRequestBody;
}


export class UpdateReportDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateReportDefinitionResult?: shared.UpdateReportDefinitionResult;

  @Metadata()
  validationException?: any;
}
