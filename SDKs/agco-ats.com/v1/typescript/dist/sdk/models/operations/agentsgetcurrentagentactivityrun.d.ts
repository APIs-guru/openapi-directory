import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsGetCurrentAgentActivityRunResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;
    contentType: string;
    statusCode: number;
}
