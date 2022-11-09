import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListKeywordsForDataSourceSourceEnum {
    AwsCloudtrail = "AWS_Cloudtrail"
,    AwsConfig = "AWS_Config"
,    AwsSecurityHub = "AWS_Security_Hub"
,    AwsApiCall = "AWS_API_Call"
,    Manual = "MANUAL"
}


export class ListKeywordsForDataSourceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: ListKeywordsForDataSourceSourceEnum;
}


export class ListKeywordsForDataSourceHeaders extends SpeakeasyBase {
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


export class ListKeywordsForDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListKeywordsForDataSourceQueryParams;

  @Metadata()
  headers: ListKeywordsForDataSourceHeaders;
}


export class ListKeywordsForDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listKeywordsForDataSourceResponse?: shared.ListKeywordsForDataSourceResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
