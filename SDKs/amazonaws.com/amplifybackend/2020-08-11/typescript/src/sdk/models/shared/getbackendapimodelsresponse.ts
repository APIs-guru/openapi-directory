import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



export class GetBackendApiModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Models" })
  models?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
