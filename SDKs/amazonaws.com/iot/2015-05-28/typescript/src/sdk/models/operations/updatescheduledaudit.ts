import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateScheduledAuditPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheduledAuditName" })
  scheduledAuditName: string;
}


export class UpdateScheduledAuditHeaders extends SpeakeasyBase {
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

export enum UpdateScheduledAuditRequestBodyDayOfWeekEnum {
    Sun = "SUN"
,    Mon = "MON"
,    Tue = "TUE"
,    Wed = "WED"
,    Thu = "THU"
,    Fri = "FRI"
,    Sat = "SAT"
}

export enum UpdateScheduledAuditRequestBodyFrequencyEnum {
    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Biweekly = "BIWEEKLY"
,    Monthly = "MONTHLY"
}


export class UpdateScheduledAuditRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: string;

  @Metadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: UpdateScheduledAuditRequestBodyDayOfWeekEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency?: UpdateScheduledAuditRequestBodyFrequencyEnum;

  @Metadata({ data: "json, name=targetCheckNames" })
  targetCheckNames?: string[];
}


export class UpdateScheduledAuditRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateScheduledAuditPathParams;

  @Metadata()
  headers: UpdateScheduledAuditHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateScheduledAuditRequestBody;
}


export class UpdateScheduledAuditResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateScheduledAuditResponse?: shared.UpdateScheduledAuditResponse;
}
