import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;
}
