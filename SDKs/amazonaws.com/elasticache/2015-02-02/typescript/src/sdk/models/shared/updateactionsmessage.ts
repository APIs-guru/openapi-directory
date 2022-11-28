import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateAction } from "./updateaction";



export class UpdateActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: UpdateAction })
  updateActions?: UpdateAction[];
}
