import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpgradePublishedSchemaHeaders extends SpeakeasyBase {
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


export class UpgradePublishedSchemaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DevelopmentSchemaArn" })
  developmentSchemaArn: string;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MinorVersion" })
  minorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=PublishedSchemaArn" })
  publishedSchemaArn: string;
}


export class UpgradePublishedSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpgradePublishedSchemaHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpgradePublishedSchemaRequestBody;
}


export class UpgradePublishedSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incompatibleSchemaException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  invalidAttachmentException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  retryableConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  upgradePublishedSchemaResponse?: shared.UpgradePublishedSchemaResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
