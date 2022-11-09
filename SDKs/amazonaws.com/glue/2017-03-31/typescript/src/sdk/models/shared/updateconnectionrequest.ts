import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionInput } from "./connectioninput";


export class UpdateConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ConnectionInput" })
  connectionInput: ConnectionInput;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
