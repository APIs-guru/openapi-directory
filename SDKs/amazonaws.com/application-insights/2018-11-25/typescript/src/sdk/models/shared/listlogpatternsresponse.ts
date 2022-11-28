import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogPattern } from "./logpattern";



export class ListLogPatternsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogPatterns", elemType: LogPattern })
  logPatterns?: LogPattern[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}
