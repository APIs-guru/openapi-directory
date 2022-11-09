import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionExecutionFilter } from "./actionexecutionfilter";


export class ListActionExecutionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: ActionExecutionFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;
}
