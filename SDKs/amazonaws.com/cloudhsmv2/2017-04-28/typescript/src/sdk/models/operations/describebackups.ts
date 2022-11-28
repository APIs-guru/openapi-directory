import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeBackupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeBackupsXAmzTargetEnum {
    BaldrApiServiceDescribeBackups = "BaldrApiService.DescribeBackups"
}


export class DescribeBackupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeBackupsXAmzTargetEnum;
}


export class DescribeBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeBackupsQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeBackupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeBackupsRequest;
}


export class DescribeBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudHsmAccessDeniedException?: any;

  @SpeakeasyMetadata()
  cloudHsmInternalFailureException?: any;

  @SpeakeasyMetadata()
  cloudHsmInvalidRequestException?: any;

  @SpeakeasyMetadata()
  cloudHsmResourceNotFoundException?: any;

  @SpeakeasyMetadata()
  cloudHsmServiceException?: any;

  @SpeakeasyMetadata()
  cloudHsmTagException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeBackupsResponse?: shared.DescribeBackupsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
