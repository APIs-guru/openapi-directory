import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociatedFleetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StackName" })
  stackName: string;
}
