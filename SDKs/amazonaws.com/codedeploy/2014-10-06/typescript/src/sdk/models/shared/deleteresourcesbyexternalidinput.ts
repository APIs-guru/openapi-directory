import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResourcesByExternalIdInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalId" })
  externalId?: string;
}
