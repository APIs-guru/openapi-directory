import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationSummary } from "./operationsummary";



export class ListOperationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OperationSummaryList", elemType: OperationSummary })
  operationSummaryList?: OperationSummary[];
}
