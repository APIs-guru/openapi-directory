import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Setting } from "./setting";


export class ListAccountSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=settings", elemType: shared.Setting })
  settings?: Setting[];
}
