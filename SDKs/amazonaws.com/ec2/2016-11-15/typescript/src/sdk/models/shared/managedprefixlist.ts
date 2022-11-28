import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrefixListStateEnum } from "./prefixliststateenum";
import { Tag } from "./tag";



// ManagedPrefixList
/** 
 * Describes a managed prefix list.
**/
export class ManagedPrefixList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addressFamily?: string;

  @SpeakeasyMetadata()
  maxEntries?: number;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  prefixListArn?: string;

  @SpeakeasyMetadata()
  prefixListId?: string;

  @SpeakeasyMetadata()
  prefixListName?: string;

  @SpeakeasyMetadata()
  state?: PrefixListStateEnum;

  @SpeakeasyMetadata()
  stateMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  version?: number;
}
