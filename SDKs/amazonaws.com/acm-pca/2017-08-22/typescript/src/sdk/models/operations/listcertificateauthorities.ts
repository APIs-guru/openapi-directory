import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCertificateAuthoritiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCertificateAuthoritiesXAmzTargetEnum {
    AcmPrivateCaListCertificateAuthorities = "ACMPrivateCA.ListCertificateAuthorities"
}


export class ListCertificateAuthoritiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCertificateAuthoritiesXAmzTargetEnum;
}


export class ListCertificateAuthoritiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCertificateAuthoritiesQueryParams;

  @Metadata()
  headers: ListCertificateAuthoritiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCertificateAuthoritiesRequest;
}


export class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listCertificateAuthoritiesResponse?: shared.ListCertificateAuthoritiesResponse;

  @Metadata()
  statusCode: number;
}
