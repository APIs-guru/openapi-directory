import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityRunsPutActivityRunStatusPathParams extends SpeakeasyBase {
    activityRunId: number;
}
export declare class ActivityRunsPutActivityRunStatusRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoActivityRunStatus?: shared.BuildSystemSharedDtoActivityRunStatus;
    buildSystemSharedDtoActivityRunStatus1?: shared.BuildSystemSharedDtoActivityRunStatus;
    buildSystemSharedDtoActivityRunStatus2?: shared.BuildSystemSharedDtoActivityRunStatus;
    textXml: Uint8Array;
}
export declare class ActivityRunsPutActivityRunStatusRequest extends SpeakeasyBase {
    pathParams: ActivityRunsPutActivityRunStatusPathParams;
    request: ActivityRunsPutActivityRunStatusRequests;
}
export declare class ActivityRunsPutActivityRunStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
