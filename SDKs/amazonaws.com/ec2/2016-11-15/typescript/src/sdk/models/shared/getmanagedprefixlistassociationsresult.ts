import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrefixListAssociation } from "./prefixlistassociation";



export class GetManagedPrefixListAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PrefixListAssociation })
  prefixListAssociations?: PrefixListAssociation[];
}
