import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";



export class DescribeRegionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Region })
  regions?: Region[];
}
