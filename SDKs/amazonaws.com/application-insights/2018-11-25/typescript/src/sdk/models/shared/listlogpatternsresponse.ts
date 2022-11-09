import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogPattern } from "./logpattern";


export class ListLogPatternsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogPatterns", elemType: shared.LogPattern })
  logPatterns?: LogPattern[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}
