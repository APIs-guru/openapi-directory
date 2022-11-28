import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2UpdateGroupsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV2UpdateGroupsIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2UpdateGroupsIdPathParams;
}
export declare class GetApiV2UpdateGroupsIdResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;
}
