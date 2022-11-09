import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutRetentionConfigurationXAmzTargetEnum {
    StarlingDoveServicePutRetentionConfiguration = "StarlingDoveService.PutRetentionConfiguration"
}


export class PutRetentionConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRetentionConfigurationXAmzTargetEnum;
}


export class PutRetentionConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRetentionConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutRetentionConfigurationRequest;
}


export class PutRetentionConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  maxNumberOfRetentionConfigurationsExceededException?: any;

  @Metadata()
  putRetentionConfigurationResponse?: shared.PutRetentionConfigurationResponse;

  @Metadata()
  statusCode: number;
}
