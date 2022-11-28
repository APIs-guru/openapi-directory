import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Difference } from "./difference";



export class GetDifferencesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=differences", elemType: Difference })
  differences?: Difference[];
}
