import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StepsPutStepPathParams extends SpeakeasyBase {
    stepId: number;
}
export declare class StepsPutStepRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoStep?: shared.BuildSystemSharedDtoStepInput;
    buildSystemSharedDtoStep1?: shared.BuildSystemSharedDtoStepInput;
    buildSystemSharedDtoStep2?: shared.BuildSystemSharedDtoStepInput;
    textXml: Uint8Array;
}
export declare class StepsPutStepRequest extends SpeakeasyBase {
    pathParams: StepsPutStepPathParams;
    request: StepsPutStepRequestsInput;
}
export declare class StepsPutStepResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
