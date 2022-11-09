import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SlackNotificationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook: string;
}
