import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeTestCasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeTestCasesXAmzTargetEnum {
    CodeBuild20161006DescribeTestCases = "CodeBuild_20161006.DescribeTestCases"
}


export class DescribeTestCasesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTestCasesXAmzTargetEnum;
}


export class DescribeTestCasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeTestCasesQueryParams;

  @Metadata()
  headers: DescribeTestCasesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTestCasesInput;
}


export class DescribeTestCasesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTestCasesOutput?: shared.DescribeTestCasesOutput;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
