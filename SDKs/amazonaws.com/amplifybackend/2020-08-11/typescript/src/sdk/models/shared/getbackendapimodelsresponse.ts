import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


export class GetBackendApiModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Models" })
  models?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
