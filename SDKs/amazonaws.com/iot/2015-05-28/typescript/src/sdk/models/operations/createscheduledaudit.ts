import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateScheduledAuditPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheduledAuditName" })
  scheduledAuditName: string;
}


export class CreateScheduledAuditHeaders extends SpeakeasyBase {
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

export enum CreateScheduledAuditRequestBodyDayOfWeekEnum {
    Sun = "SUN"
,    Mon = "MON"
,    Tue = "TUE"
,    Wed = "WED"
,    Thu = "THU"
,    Fri = "FRI"
,    Sat = "SAT"
}

export enum CreateScheduledAuditRequestBodyFrequencyEnum {
    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Biweekly = "BIWEEKLY"
,    Monthly = "MONTHLY"
}


export class CreateScheduledAuditRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: string;

  @Metadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: CreateScheduledAuditRequestBodyDayOfWeekEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency: CreateScheduledAuditRequestBodyFrequencyEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=targetCheckNames" })
  targetCheckNames: string[];
}


export class CreateScheduledAuditRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateScheduledAuditPathParams;

  @Metadata()
  headers: CreateScheduledAuditHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateScheduledAuditRequestBody;
}


export class CreateScheduledAuditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createScheduledAuditResponse?: shared.CreateScheduledAuditResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
