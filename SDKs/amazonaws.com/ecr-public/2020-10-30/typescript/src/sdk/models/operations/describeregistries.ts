import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeRegistriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum DescribeRegistriesXAmzTargetEnum {
    SpencerFrontendServiceDescribeRegistries = "SpencerFrontendService.DescribeRegistries"
}


export class DescribeRegistriesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeRegistriesXAmzTargetEnum;
}


export class DescribeRegistriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeRegistriesQueryParams;

  @Metadata()
  headers: DescribeRegistriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeRegistriesRequest;
}


export class DescribeRegistriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeRegistriesResponse?: shared.DescribeRegistriesResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedCommandException?: any;
}
