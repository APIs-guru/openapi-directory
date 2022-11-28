import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrefixList } from "./prefixlist";



export class DescribePrefixListsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PrefixList })
  prefixLists?: PrefixList[];
}
