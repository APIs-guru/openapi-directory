import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=state" })
  state?: Map<string, any>;
}
