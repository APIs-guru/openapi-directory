import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateGlobalTableSettingsXAmzTargetEnum {
    DynamoDb20120810UpdateGlobalTableSettings = "DynamoDB_20120810.UpdateGlobalTableSettings"
}


export class UpdateGlobalTableSettingsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateGlobalTableSettingsXAmzTargetEnum;
}


export class UpdateGlobalTableSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateGlobalTableSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateGlobalTableSettingsInput;
}


export class UpdateGlobalTableSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalTableNotFoundException?: any;

  @Metadata()
  indexNotFoundException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  replicaNotFoundException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGlobalTableSettingsOutput?: shared.UpdateGlobalTableSettingsOutput;
}
