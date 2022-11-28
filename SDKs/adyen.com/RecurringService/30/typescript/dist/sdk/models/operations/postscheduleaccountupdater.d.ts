import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostScheduleAccountUpdaterSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostScheduleAccountUpdaterRequest extends SpeakeasyBase {
    request?: any;
    security: PostScheduleAccountUpdaterSecurity;
}
export declare class PostScheduleAccountUpdaterResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAccountUpdaterResult?: any;
    serviceError?: any;
    statusCode: number;
}
