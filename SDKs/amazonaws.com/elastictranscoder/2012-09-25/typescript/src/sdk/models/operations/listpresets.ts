import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPresetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Ascending" })
  ascending?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageToken" })
  pageToken?: string;
}


export class ListPresetsHeaders extends SpeakeasyBase {
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


export class ListPresetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPresetsQueryParams;

  @Metadata()
  headers: ListPresetsHeaders;
}


export class ListPresetsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleVersionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  listPresetsResponse?: shared.ListPresetsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
