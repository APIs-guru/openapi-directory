import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAccountSettingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListAccountSettingsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListAccountSettings = "AmazonEC2ContainerServiceV20141113.ListAccountSettings"
}


export class ListAccountSettingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAccountSettingsXAmzTargetEnum;
}


export class ListAccountSettingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAccountSettingsQueryParams;

  @Metadata()
  headers: ListAccountSettingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAccountSettingsRequest;
}


export class ListAccountSettingsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listAccountSettingsResponse?: shared.ListAccountSettingsResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
