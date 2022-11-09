import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeClientAuthenticationSettingsXAmzTargetEnum {
    DirectoryService20150416DescribeClientAuthenticationSettings = "DirectoryService_20150416.DescribeClientAuthenticationSettings"
}


export class DescribeClientAuthenticationSettingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeClientAuthenticationSettingsXAmzTargetEnum;
}


export class DescribeClientAuthenticationSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeClientAuthenticationSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeClientAuthenticationSettingsRequest;
}


export class DescribeClientAuthenticationSettingsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeClientAuthenticationSettingsResult?: shared.DescribeClientAuthenticationSettingsResult;

  @Metadata()
  directoryDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
