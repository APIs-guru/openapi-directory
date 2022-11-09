import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeLimitsXAmzTargetEnum {
    DynamoDb20120810DescribeLimits = "DynamoDB_20120810.DescribeLimits"
}


export class DescribeLimitsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeLimitsXAmzTargetEnum;
}


export class DescribeLimitsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeLimitsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DescribeLimitsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeLimitsOutput?: shared.DescribeLimitsOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
