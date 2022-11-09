import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeJobDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeJobDefinitionsHeaders extends SpeakeasyBase {
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


export class DescribeJobDefinitionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobDefinitionName" })
  jobDefinitionName?: string;

  @Metadata({ data: "json, name=jobDefinitions" })
  jobDefinitions?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class DescribeJobDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeJobDefinitionsQueryParams;

  @Metadata()
  headers: DescribeJobDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeJobDefinitionsRequestBody;
}


export class DescribeJobDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeJobDefinitionsResponse?: shared.DescribeJobDefinitionsResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
