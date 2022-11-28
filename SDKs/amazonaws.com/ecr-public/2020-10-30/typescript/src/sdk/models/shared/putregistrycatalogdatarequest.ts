import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRegistryCatalogDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
