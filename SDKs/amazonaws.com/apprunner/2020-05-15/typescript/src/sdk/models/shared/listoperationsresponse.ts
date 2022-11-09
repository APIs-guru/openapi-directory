import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperationSummary } from "./operationsummary";


export class ListOperationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OperationSummaryList", elemType: shared.OperationSummary })
  operationSummaryList?: OperationSummary[];
}
