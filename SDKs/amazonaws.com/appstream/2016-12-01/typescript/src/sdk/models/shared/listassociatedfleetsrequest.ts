import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAssociatedFleetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StackName" })
  stackName: string;
}
