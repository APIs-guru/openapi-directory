import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportApplicationUsageHeaders extends SpeakeasyBase {
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


// ImportApplicationUsageRequestBodySourceS3Location
/** 
 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
**/
export class ImportApplicationUsageRequestBodySourceS3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: shared.S3BucketRegionEnum;
}


export class ImportApplicationUsageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceS3Location" })
  sourceS3Location: ImportApplicationUsageRequestBodySourceS3Location;
}


export class ImportApplicationUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImportApplicationUsageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ImportApplicationUsageRequestBody;
}


export class ImportApplicationUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importApplicationUsageResult?: shared.ImportApplicationUsageResult;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
