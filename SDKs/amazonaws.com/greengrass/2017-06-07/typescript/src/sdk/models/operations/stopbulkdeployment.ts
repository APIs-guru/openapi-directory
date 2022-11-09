import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopBulkDeploymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BulkDeploymentId" })
  bulkDeploymentId: string;
}


export class StopBulkDeploymentHeaders extends SpeakeasyBase {
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
}


export class StopBulkDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopBulkDeploymentPathParams;

  @Metadata()
  headers: StopBulkDeploymentHeaders;
}


export class StopBulkDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopBulkDeploymentResponse?: Map<string, any>;
}
