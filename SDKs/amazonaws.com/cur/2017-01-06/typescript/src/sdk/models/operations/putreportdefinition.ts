import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutReportDefinitionXAmzTargetEnum {
    AwsOrigamiServiceGatewayServicePutReportDefinition = "AWSOrigamiServiceGatewayService.PutReportDefinition"
}


export class PutReportDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutReportDefinitionXAmzTargetEnum;
}


export class PutReportDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutReportDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutReportDefinitionRequest;
}


export class PutReportDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateReportNameException?: any;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  putReportDefinitionResponse?: Map<string, any>;

  @Metadata()
  reportLimitReachedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
