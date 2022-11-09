import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogPattern } from "./logpattern";


export class CreateLogPatternResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogPattern" })
  logPattern?: LogPattern;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}
