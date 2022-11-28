import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionFilter } from "./actionexecutionfilter";



export class ListActionExecutionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: ActionExecutionFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;
}
