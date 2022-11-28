import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResourcesByExternalIdInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;
}
