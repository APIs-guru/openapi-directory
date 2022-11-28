import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateScheduledAuditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledAuditName" })
  scheduledAuditName: string;
}


export class UpdateScheduledAuditHeaders extends SpeakeasyBase {
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
}

export enum UpdateScheduledAuditRequestBodyDayOfWeekEnum {
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thu = "THU",
    Fri = "FRI",
    Sat = "SAT"
}

export enum UpdateScheduledAuditRequestBodyFrequencyEnum {
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Biweekly = "BIWEEKLY",
    Monthly = "MONTHLY"
}


export class UpdateScheduledAuditRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: UpdateScheduledAuditRequestBodyDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: UpdateScheduledAuditRequestBodyFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=targetCheckNames" })
  targetCheckNames?: string[];
}


export class UpdateScheduledAuditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateScheduledAuditPathParams;

  @SpeakeasyMetadata()
  headers: UpdateScheduledAuditHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateScheduledAuditRequestBody;
}


export class UpdateScheduledAuditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateScheduledAuditResponse?: shared.UpdateScheduledAuditResponse;
}
