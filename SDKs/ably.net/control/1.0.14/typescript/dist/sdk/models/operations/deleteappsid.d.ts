import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAppsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteAppsIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteAppsIdRequest extends SpeakeasyBase {
    pathParams: DeleteAppsIdPathParams;
    security: DeleteAppsIdSecurity;
}
export declare class DeleteAppsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
