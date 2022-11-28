import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsGetCurrentAgentAsyncResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgent;
    contentType: string;
    statusCode: number;
}
