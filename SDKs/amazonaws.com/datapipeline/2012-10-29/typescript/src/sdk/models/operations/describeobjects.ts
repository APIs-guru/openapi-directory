import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeObjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=marker" })
  marker?: string;
}

export enum DescribeObjectsXAmzTargetEnum {
    DataPipelineDescribeObjects = "DataPipeline.DescribeObjects"
}


export class DescribeObjectsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeObjectsXAmzTargetEnum;
}


export class DescribeObjectsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeObjectsQueryParams;

  @Metadata()
  headers: DescribeObjectsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeObjectsInput;
}


export class DescribeObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeObjectsOutput?: shared.DescribeObjectsOutput;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  pipelineDeletedException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
