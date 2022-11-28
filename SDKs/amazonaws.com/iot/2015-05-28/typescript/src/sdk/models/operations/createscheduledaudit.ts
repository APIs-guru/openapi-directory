import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateScheduledAuditPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scheduledAuditName" })
  scheduledAuditName: string;
}


export class CreateScheduledAuditHeaders extends SpeakeasyBase {
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

export enum CreateScheduledAuditRequestBodyDayOfWeekEnum {
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thu = "THU",
    Fri = "FRI",
    Sat = "SAT"
}

export enum CreateScheduledAuditRequestBodyFrequencyEnum {
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Biweekly = "BIWEEKLY",
    Monthly = "MONTHLY"
}


export class CreateScheduledAuditRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayOfMonth" })
  dayOfMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=dayOfWeek" })
  dayOfWeek?: CreateScheduledAuditRequestBodyDayOfWeekEnum;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: CreateScheduledAuditRequestBodyFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=targetCheckNames" })
  targetCheckNames: string[];
}


export class CreateScheduledAuditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateScheduledAuditPathParams;

  @SpeakeasyMetadata()
  headers: CreateScheduledAuditHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateScheduledAuditRequestBody;
}


export class CreateScheduledAuditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createScheduledAuditResponse?: shared.CreateScheduledAuditResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
