import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivitiesPutActivityPathParams extends SpeakeasyBase {
    activityId: number;
}
export declare class ActivitiesPutActivityRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoActivity?: shared.BuildSystemSharedDtoActivityInput;
    buildSystemSharedDtoActivity1?: shared.BuildSystemSharedDtoActivityInput;
    buildSystemSharedDtoActivity2?: shared.BuildSystemSharedDtoActivityInput;
    textXml: Uint8Array;
}
export declare class ActivitiesPutActivityRequest extends SpeakeasyBase {
    pathParams: ActivitiesPutActivityPathParams;
    request: ActivitiesPutActivityRequestsInput;
}
export declare class ActivitiesPutActivityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
