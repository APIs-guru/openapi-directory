import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConnectionIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;
}
