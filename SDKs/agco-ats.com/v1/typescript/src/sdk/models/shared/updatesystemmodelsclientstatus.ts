import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsClientStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID" })
  clientId?: string;

  @Metadata({ data: "json, name=LastCheckin" })
  lastCheckin?: Date;

  @Metadata({ data: "json, name=MinutesElapsed" })
  minutesElapsed?: number;

  @Metadata({ data: "json, name=ReportResult" })
  reportResult?: string;

  @Metadata({ data: "json, name=ReportResultIsValid" })
  reportResultIsValid?: boolean;

  @Metadata({ data: "json, name=ReportValue" })
  reportValue?: string;

  @Metadata({ data: "json, name=Tag" })
  tag?: string;
}
