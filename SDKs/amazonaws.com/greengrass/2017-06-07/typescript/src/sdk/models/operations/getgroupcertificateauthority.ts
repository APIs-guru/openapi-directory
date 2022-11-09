import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGroupCertificateAuthorityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CertificateAuthorityId" })
  certificateAuthorityId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class GetGroupCertificateAuthorityHeaders extends SpeakeasyBase {
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


export class GetGroupCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGroupCertificateAuthorityPathParams;

  @Metadata()
  headers: GetGroupCertificateAuthorityHeaders;
}


export class GetGroupCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getGroupCertificateAuthorityResponse?: shared.GetGroupCertificateAuthorityResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;
}
