import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLdapsSettingsXAmzTargetEnum {
    DirectoryService20150416DescribeLdapsSettings = "DirectoryService_20150416.DescribeLDAPSSettings"
}


export class DescribeLdapsSettingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLdapsSettingsXAmzTargetEnum;
}


export class DescribeLdapsSettingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLdapsSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeLdapsSettingsRequest;
}


export class DescribeLdapsSettingsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeLdapsSettingsResult?: shared.DescribeLdapsSettingsResult;

  @Metadata()
  directoryDoesNotExistException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
