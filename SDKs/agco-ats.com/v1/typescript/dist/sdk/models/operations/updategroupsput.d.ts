import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupsPutPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateGroupsPutRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsUpdateGroup?: shared.UpdateSystemModelsUpdateGroup;
    updateSystemModelsUpdateGroup1?: shared.UpdateSystemModelsUpdateGroup;
    updateSystemModelsUpdateGroup2?: shared.UpdateSystemModelsUpdateGroup;
}
export declare class UpdateGroupsPutRequest extends SpeakeasyBase {
    pathParams: UpdateGroupsPutPathParams;
    request: UpdateGroupsPutRequests;
}
export declare class UpdateGroupsPutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
