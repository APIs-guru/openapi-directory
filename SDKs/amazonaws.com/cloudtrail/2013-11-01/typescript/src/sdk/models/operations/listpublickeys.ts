import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPublicKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListPublicKeysXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys"
}


export class ListPublicKeysHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPublicKeysXAmzTargetEnum;
}


export class ListPublicKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPublicKeysQueryParams;

  @Metadata()
  headers: ListPublicKeysHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListPublicKeysRequest;
}


export class ListPublicKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidTimeRangeException?: any;

  @Metadata()
  invalidTokenException?: any;

  @Metadata()
  listPublicKeysResponse?: shared.ListPublicKeysResponse;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
