import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivitiesPostActivityRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoActivity?: shared.BuildSystemSharedDtoActivityInput;
    buildSystemSharedDtoActivity1?: shared.BuildSystemSharedDtoActivityInput;
    buildSystemSharedDtoActivity2?: shared.BuildSystemSharedDtoActivityInput;
    textXml: Uint8Array;
}
export declare class ActivitiesPostActivityRequest extends SpeakeasyBase {
    request: ActivitiesPostActivityRequestsInput;
}
export declare class ActivitiesPostActivityResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    activitiesPostActivity200ApplicationJsonInt32Integer?: number;
    activitiesPostActivity200TextJsonInt32Integer?: number;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
