import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegistryCatalogData } from "./registrycatalogdata";


export class GetRegistryCatalogDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=registryCatalogData" })
  registryCatalogData: RegistryCatalogData;
}
