import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeCodeCoveragesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeCodeCoveragesXAmzTargetEnum {
    CodeBuild20161006DescribeCodeCoverages = "CodeBuild_20161006.DescribeCodeCoverages"
}


export class DescribeCodeCoveragesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCodeCoveragesXAmzTargetEnum;
}


export class DescribeCodeCoveragesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeCodeCoveragesQueryParams;

  @Metadata()
  headers: DescribeCodeCoveragesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCodeCoveragesInput;
}


export class DescribeCodeCoveragesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCodeCoveragesOutput?: shared.DescribeCodeCoveragesOutput;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
