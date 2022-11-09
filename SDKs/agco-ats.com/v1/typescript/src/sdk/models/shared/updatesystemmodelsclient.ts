import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID, form, name=ClientID;" })
  clientId?: string;

  @Metadata({ data: "json, name=LastCheckin, form, name=LastCheckin;" })
  lastCheckin?: Date;

  @Metadata({ data: "json, name=Tag, form, name=Tag;" })
  tag?: string;
}
