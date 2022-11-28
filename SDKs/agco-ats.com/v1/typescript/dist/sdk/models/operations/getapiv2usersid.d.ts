import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2UsersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2UsersIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2UsersIdPathParams;
}
export declare class GetApiV2UsersIdResponse extends SpeakeasyBase {
    apiModelsUser?: shared.ApiModelsUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
