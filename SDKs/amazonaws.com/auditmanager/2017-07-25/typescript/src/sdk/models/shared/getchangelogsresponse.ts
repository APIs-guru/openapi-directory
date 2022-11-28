import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeLog } from "./changelog";



export class GetChangeLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeLogs", elemType: ChangeLog })
  changeLogs?: ChangeLog[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
