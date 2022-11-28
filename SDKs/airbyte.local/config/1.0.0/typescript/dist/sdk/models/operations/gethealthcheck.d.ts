import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    healthCheckRead?: shared.HealthCheckRead;
    statusCode: number;
}
