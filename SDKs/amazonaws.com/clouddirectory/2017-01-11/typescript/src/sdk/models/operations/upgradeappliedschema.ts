import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpgradeAppliedSchemaHeaders extends SpeakeasyBase {
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


export class UpgradeAppliedSchemaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=PublishedSchemaArn" })
  publishedSchemaArn: string;
}


export class UpgradeAppliedSchemaRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpgradeAppliedSchemaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpgradeAppliedSchemaRequestBody;
}


export class UpgradeAppliedSchemaResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleSchemaException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidAttachmentException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  schemaAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  upgradeAppliedSchemaResponse?: shared.UpgradeAppliedSchemaResponse;

  @Metadata()
  validationException?: any;
}
