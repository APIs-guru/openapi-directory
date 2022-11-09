import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHealthCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  healthCheckRead?: shared.HealthCheckRead;

  @Metadata()
  statusCode: number;
}
