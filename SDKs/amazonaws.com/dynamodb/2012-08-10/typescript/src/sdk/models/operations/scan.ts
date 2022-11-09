import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ExclusiveStartKey" })
  exclusiveStartKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;
}

export enum ScanXAmzTargetEnum {
    DynamoDb20120810Scan = "DynamoDB_20120810.Scan"
}


export class ScanHeaders extends SpeakeasyBase {
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
  xAmzTarget: ScanXAmzTargetEnum;
}


export class ScanRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ScanQueryParams;

  @Metadata()
  headers: ScanHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ScanInput;
}


export class ScanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  provisionedThroughputExceededException?: any;

  @Metadata()
  requestLimitExceeded?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  scanOutput?: shared.ScanOutput;

  @Metadata()
  statusCode: number;
}
