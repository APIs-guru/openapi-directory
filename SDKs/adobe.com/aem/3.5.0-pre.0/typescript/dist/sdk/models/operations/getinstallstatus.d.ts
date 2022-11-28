import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstallStatusResponse extends SpeakeasyBase {
    contentType: string;
    installStatus?: shared.InstallStatus;
    statusCode: number;
    getInstallStatusDefaultApplicationJsonString?: string;
}
