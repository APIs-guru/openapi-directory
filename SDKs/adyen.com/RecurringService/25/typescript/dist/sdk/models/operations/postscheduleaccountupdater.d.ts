import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostScheduleAccountUpdaterSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostScheduleAccountUpdaterSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostScheduleAccountUpdaterSecurity extends SpeakeasyBase {
    option1?: PostScheduleAccountUpdaterSecurityOption1;
    option2?: PostScheduleAccountUpdaterSecurityOption2;
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
