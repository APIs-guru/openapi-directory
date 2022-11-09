import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stack } from "./stack";


export class DescribeStacksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Stacks", elemType: shared.Stack })
  stacks?: Stack[];
}
