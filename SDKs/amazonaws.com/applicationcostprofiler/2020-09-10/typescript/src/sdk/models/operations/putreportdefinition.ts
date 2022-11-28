import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutReportDefinitionHeaders extends SpeakeasyBase {
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


// PutReportDefinitionRequestBodyDestinationS3Location
/** 
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
export class PutReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}

export enum PutReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV",
    Parquet = "PARQUET"
}

export enum PutReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    All = "ALL"
}


export class PutReportDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationS3Location" })
  destinationS3Location: PutReportDefinitionRequestBodyDestinationS3Location;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: PutReportDefinitionRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=reportDescription" })
  reportDescription: string;

  @SpeakeasyMetadata({ data: "json, name=reportFrequency" })
  reportFrequency: PutReportDefinitionRequestBodyReportFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=reportId" })
  reportId: string;
}


export class PutReportDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutReportDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutReportDefinitionRequestBody;
}


export class PutReportDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  putReportDefinitionResult?: shared.PutReportDefinitionResult;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
