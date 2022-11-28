import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateReportDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportId" })
  reportId: string;
}


export class UpdateReportDefinitionHeaders extends SpeakeasyBase {
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


// UpdateReportDefinitionRequestBodyDestinationS3Location
/** 
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
export class UpdateReportDefinitionRequestBodyDestinationS3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}

export enum UpdateReportDefinitionRequestBodyFormatEnum {
    Csv = "CSV",
    Parquet = "PARQUET"
}

export enum UpdateReportDefinitionRequestBodyReportFrequencyEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    All = "ALL"
}


export class UpdateReportDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationS3Location" })
  destinationS3Location: UpdateReportDefinitionRequestBodyDestinationS3Location;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: UpdateReportDefinitionRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=reportDescription" })
  reportDescription: string;

  @SpeakeasyMetadata({ data: "json, name=reportFrequency" })
  reportFrequency: UpdateReportDefinitionRequestBodyReportFrequencyEnum;
}


export class UpdateReportDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateReportDefinitionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateReportDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateReportDefinitionRequestBody;
}


export class UpdateReportDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateReportDefinitionResult?: shared.UpdateReportDefinitionResult;

  @SpeakeasyMetadata()
  validationException?: any;
}
