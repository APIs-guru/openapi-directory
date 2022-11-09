import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportApplicationUsageHeaders extends SpeakeasyBase {
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


// ImportApplicationUsageRequestBodySourceS3Location
/** 
 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
**/
export class ImportApplicationUsageRequestBodySourceS3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=region" })
  region?: shared.S3BucketRegionEnum;
}


export class ImportApplicationUsageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceS3Location" })
  sourceS3Location: ImportApplicationUsageRequestBodySourceS3Location;
}


export class ImportApplicationUsageRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportApplicationUsageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ImportApplicationUsageRequestBody;
}


export class ImportApplicationUsageResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  importApplicationUsageResult?: shared.ImportApplicationUsageResult;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
