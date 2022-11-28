import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutSchemaVersionMetadataXAmzTargetEnum {
    AwsGluePutSchemaVersionMetadata = "AWSGlue.PutSchemaVersionMetadata"
}


export class PutSchemaVersionMetadataHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutSchemaVersionMetadataXAmzTargetEnum;
}


export class PutSchemaVersionMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutSchemaVersionMetadataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutSchemaVersionMetadataInput;
}


export class PutSchemaVersionMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  putSchemaVersionMetadataResponse?: shared.PutSchemaVersionMetadataResponse;

  @SpeakeasyMetadata()
  resourceNumberLimitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
