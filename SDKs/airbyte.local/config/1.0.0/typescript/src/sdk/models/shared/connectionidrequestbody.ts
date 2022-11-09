import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectionIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;
}
