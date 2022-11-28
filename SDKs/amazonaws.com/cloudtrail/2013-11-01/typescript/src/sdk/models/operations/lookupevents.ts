import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LookupEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum LookupEventsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEvents = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents"
}


export class LookupEventsHeaders extends SpeakeasyBase {
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
  xAmzTarget: LookupEventsXAmzTargetEnum;
}


export class LookupEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LookupEventsQueryParams;

  @SpeakeasyMetadata()
  headers: LookupEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LookupEventsRequest;
}


export class LookupEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidEventCategoryException?: any;

  @SpeakeasyMetadata()
  invalidLookupAttributesException?: any;

  @SpeakeasyMetadata()
  invalidMaxResultsException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidTimeRangeException?: any;

  @SpeakeasyMetadata()
  lookupEventsResponse?: shared.LookupEventsResponse;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
