import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartMonitoringMemberHeaders extends SpeakeasyBase {
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


export class StartMonitoringMemberRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=GraphArn" })
  graphArn: string;
}


export class StartMonitoringMemberRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartMonitoringMemberHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartMonitoringMemberRequestBody;
}


export class StartMonitoringMemberResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
