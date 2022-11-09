import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangeLog } from "./changelog";


export class GetChangeLogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeLogs", elemType: shared.ChangeLog })
  changeLogs?: ChangeLog[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
