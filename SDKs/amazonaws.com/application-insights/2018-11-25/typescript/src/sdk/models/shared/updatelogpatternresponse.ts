import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogPattern } from "./logpattern";



export class UpdateLogPatternResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogPattern" })
  logPattern?: LogPattern;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}
