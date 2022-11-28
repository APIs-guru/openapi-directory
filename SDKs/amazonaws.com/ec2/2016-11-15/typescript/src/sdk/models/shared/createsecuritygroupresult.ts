import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateSecurityGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
