import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthEventType } from "./autheventtype";


export class AdminListUserAuthEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthEvents", elemType: shared.AuthEventType })
  authEvents?: AuthEventType[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
