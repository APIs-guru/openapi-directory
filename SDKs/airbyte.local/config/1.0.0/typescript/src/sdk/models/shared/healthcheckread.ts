import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HealthCheckRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=db" })
  db: boolean;
}
