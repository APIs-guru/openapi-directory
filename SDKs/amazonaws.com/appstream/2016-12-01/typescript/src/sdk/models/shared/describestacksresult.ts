import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stack } from "./stack";



export class DescribeStacksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Stacks", elemType: Stack })
  stacks?: Stack[];
}
