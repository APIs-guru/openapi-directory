import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsClientStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastCheckin" })
  lastCheckin?: Date;

  @SpeakeasyMetadata({ data: "json, name=MinutesElapsed" })
  minutesElapsed?: number;

  @SpeakeasyMetadata({ data: "json, name=ReportResult" })
  reportResult?: string;

  @SpeakeasyMetadata({ data: "json, name=ReportResultIsValid" })
  reportResultIsValid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReportValue" })
  reportValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Tag" })
  tag?: string;
}
