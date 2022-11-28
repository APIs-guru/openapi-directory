import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthEventType } from "./autheventtype";



export class AdminListUserAuthEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthEvents", elemType: AuthEventType })
  authEvents?: AuthEventType[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
