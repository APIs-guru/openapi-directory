import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdate } from "./serviceupdate";



export class ServiceUpdatesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ServiceUpdate })
  serviceUpdates?: ServiceUpdate[];
}
