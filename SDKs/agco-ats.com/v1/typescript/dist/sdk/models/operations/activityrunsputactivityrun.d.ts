import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityRunsPutActivityRunPathParams extends SpeakeasyBase {
    activityRunId: number;
}
export declare class ActivityRunsPutActivityRunRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRunInput;
    buildSystemSharedDtoActivityRun1?: shared.BuildSystemSharedDtoActivityRunInput;
    buildSystemSharedDtoActivityRun2?: shared.BuildSystemSharedDtoActivityRunInput;
    textXml: Uint8Array;
}
export declare class ActivityRunsPutActivityRunRequest extends SpeakeasyBase {
    pathParams: ActivityRunsPutActivityRunPathParams;
    request: ActivityRunsPutActivityRunRequestsInput;
}
export declare class ActivityRunsPutActivityRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
