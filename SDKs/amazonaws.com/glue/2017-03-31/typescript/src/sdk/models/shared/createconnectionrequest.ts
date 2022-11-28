import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionInput } from "./connectioninput";



export class CreateConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionInput" })
  connectionInput: ConnectionInput;
}
