import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsGetAgentsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class AgentsGetAgentsRequest extends SpeakeasyBase {
    queryParams: AgentsGetAgentsQueryParams;
}
export declare class AgentsGetAgentsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseBuildSystemSharedDtoAgent?: shared.ApiPagedResponseBuildSystemSharedDtoAgent;
    contentType: string;
    statusCode: number;
}
