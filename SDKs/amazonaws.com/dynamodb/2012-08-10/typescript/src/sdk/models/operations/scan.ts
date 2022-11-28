import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScanQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExclusiveStartKey" })
  exclusiveStartKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;
}

export enum ScanXAmzTargetEnum {
    DynamoDb20120810Scan = "DynamoDB_20120810.Scan"
}


export class ScanHeaders extends SpeakeasyBase {
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
  xAmzTarget: ScanXAmzTargetEnum;
}


export class ScanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ScanQueryParams;

  @SpeakeasyMetadata()
  headers: ScanHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScanInput;
}


export class ScanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  provisionedThroughputExceededException?: any;

  @SpeakeasyMetadata()
  requestLimitExceeded?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  scanOutput?: shared.ScanOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
