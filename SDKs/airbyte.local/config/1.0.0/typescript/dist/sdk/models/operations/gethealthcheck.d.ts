import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    healthCheckRead?: shared.HealthCheckRead;
    statusCode: number;
}
