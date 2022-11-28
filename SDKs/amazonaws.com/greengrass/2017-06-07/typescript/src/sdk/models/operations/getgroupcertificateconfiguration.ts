import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupCertificateConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=GroupId" })
  groupId: string;
}


export class GetGroupCertificateConfigurationHeaders extends SpeakeasyBase {
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


export class GetGroupCertificateConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupCertificateConfigurationPathParams;

  @SpeakeasyMetadata()
  headers: GetGroupCertificateConfigurationHeaders;
}


export class GetGroupCertificateConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGroupCertificateConfigurationResponse?: shared.GetGroupCertificateConfigurationResponse;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
