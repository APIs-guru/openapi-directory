import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionExecutionDetail } from "./actionexecutiondetail";


export class ListActionExecutionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionExecutionDetails", elemType: shared.ActionExecutionDetail })
  actionExecutionDetails?: ActionExecutionDetail[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
