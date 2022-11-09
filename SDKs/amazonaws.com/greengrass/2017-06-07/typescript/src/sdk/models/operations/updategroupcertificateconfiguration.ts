import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupCertificateConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class UpdateGroupCertificateConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateGroupCertificateConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateExpiryInMilliseconds" })
  certificateExpiryInMilliseconds?: string;
}


export class UpdateGroupCertificateConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupCertificateConfigurationPathParams;

  @Metadata()
  headers: UpdateGroupCertificateConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGroupCertificateConfigurationRequestBody;
}


export class UpdateGroupCertificateConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateGroupCertificateConfigurationResponse?: shared.UpdateGroupCertificateConfigurationResponse;
}
