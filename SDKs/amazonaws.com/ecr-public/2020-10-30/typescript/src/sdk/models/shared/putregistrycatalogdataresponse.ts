import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryCatalogData } from "./registrycatalogdata";


export class PutRegistryCatalogDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=registryCatalogData" })
  registryCatalogData: RegistryCatalogData;
}
