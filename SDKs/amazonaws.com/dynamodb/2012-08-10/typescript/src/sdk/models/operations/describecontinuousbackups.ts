import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeContinuousBackupsXAmzTargetEnum {
    DynamoDb20120810DescribeContinuousBackups = "DynamoDB_20120810.DescribeContinuousBackups"
}


export class DescribeContinuousBackupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeContinuousBackupsXAmzTargetEnum;
}


export class DescribeContinuousBackupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeContinuousBackupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeContinuousBackupsInput;
}


export class DescribeContinuousBackupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeContinuousBackupsOutput?: shared.DescribeContinuousBackupsOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableNotFoundException?: any;
}
