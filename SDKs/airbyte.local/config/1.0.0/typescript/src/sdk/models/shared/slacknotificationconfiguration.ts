import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SlackNotificationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: string;
}
