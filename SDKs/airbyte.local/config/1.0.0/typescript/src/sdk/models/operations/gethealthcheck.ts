import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHealthCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  healthCheckRead?: shared.HealthCheckRead;

  @SpeakeasyMetadata()
  statusCode: number;
}
