import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionDetail } from "./actionexecutiondetail";



export class ListActionExecutionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionExecutionDetails", elemType: ActionExecutionDetail })
  actionExecutionDetails?: ActionExecutionDetail[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
