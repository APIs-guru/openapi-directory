import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StepsPostStepRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoStep?: shared.BuildSystemSharedDtoStepInput;
    buildSystemSharedDtoStep1?: shared.BuildSystemSharedDtoStepInput;
    buildSystemSharedDtoStep2?: shared.BuildSystemSharedDtoStepInput;
    textXml: Uint8Array;
}
export declare class StepsPostStepRequest extends SpeakeasyBase {
    request: StepsPostStepRequestsInput;
}
export declare class StepsPostStepResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    stepsPostStep200ApplicationJsonInt32Integer?: number;
    stepsPostStep200TextJsonInt32Integer?: number;
}
