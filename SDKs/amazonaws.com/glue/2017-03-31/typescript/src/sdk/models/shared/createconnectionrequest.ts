import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionInput } from "./connectioninput";


export class CreateConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ConnectionInput" })
  connectionInput: ConnectionInput;
}
