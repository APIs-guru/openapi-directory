import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistryCatalogData } from "./registrycatalogdata";



export class PutRegistryCatalogDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registryCatalogData" })
  registryCatalogData: RegistryCatalogData;
}
