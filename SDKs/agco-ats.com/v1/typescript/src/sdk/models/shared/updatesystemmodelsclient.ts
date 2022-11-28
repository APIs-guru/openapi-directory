import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastCheckin, form, name=LastCheckin;" })
  lastCheckin?: Date;

  @SpeakeasyMetadata({ data: "json, name=Tag, form, name=Tag;" })
  tag?: string;
}
