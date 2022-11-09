import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteReportDefinitionXAmzTargetEnum {
    AwsOrigamiServiceGatewayServiceDeleteReportDefinition = "AWSOrigamiServiceGatewayService.DeleteReportDefinition"
}


export class DeleteReportDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteReportDefinitionXAmzTargetEnum;
}


export class DeleteReportDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteReportDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteReportDefinitionRequest;
}


export class DeleteReportDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteReportDefinitionResponse?: shared.DeleteReportDefinitionResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
