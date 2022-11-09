import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDataCatalogEncryptionSettingsXAmzTargetEnum {
    AwsGlueGetDataCatalogEncryptionSettings = "AWSGlue.GetDataCatalogEncryptionSettings"
}


export class GetDataCatalogEncryptionSettingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDataCatalogEncryptionSettingsXAmzTargetEnum;
}


export class GetDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDataCatalogEncryptionSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDataCatalogEncryptionSettingsRequest;
}


export class GetDataCatalogEncryptionSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDataCatalogEncryptionSettingsResponse?: shared.GetDataCatalogEncryptionSettingsResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
