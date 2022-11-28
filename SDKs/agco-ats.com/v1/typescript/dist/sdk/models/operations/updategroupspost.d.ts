import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupsPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;
    updateSystemModelsUpdateGroup1?: shared.UpdateSystemModelsUpdateGroup;
    updateSystemModelsUpdateGroup2?: shared.UpdateSystemModelsUpdateGroup;
}
export declare class UpdateGroupsPostRequest extends SpeakeasyBase {
    request: UpdateGroupsPostRequests;
}
export declare class UpdateGroupsPostResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateGroupsPost200ApplicationJsonString?: string;
    updateGroupsPost200ApplicationXmlString?: string;
    updateGroupsPost200TextJsonString?: string;
    updateGroupsPost200TextXmlString?: string;
}
