import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeClustersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeClustersXAmzTargetEnum {
    BaldrApiServiceDescribeClusters = "BaldrApiService.DescribeClusters"
}


export class DescribeClustersHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeClustersXAmzTargetEnum;
}


export class DescribeClustersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeClustersQueryParams;

  @Metadata()
  headers: DescribeClustersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeClustersRequest;
}


export class DescribeClustersResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmAccessDeniedException?: any;

  @Metadata()
  cloudHsmInternalFailureException?: any;

  @Metadata()
  cloudHsmInvalidRequestException?: any;

  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  cloudHsmTagException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeClustersResponse?: shared.DescribeClustersResponse;

  @Metadata()
  statusCode: number;
}
