import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAppsAppIdKeysPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetAppsAppIdKeysSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAppsAppIdKeysRequest extends SpeakeasyBase {
    pathParams: GetAppsAppIdKeysPathParams;
    security: GetAppsAppIdKeysSecurity;
}
export declare class GetAppsAppIdKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    keyResponses?: shared.KeyResponse[];
}
