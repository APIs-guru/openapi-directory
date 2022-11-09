import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HealthCheckRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=db" })
  db: boolean;
}
