import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningTemplateSummary } from "./provisioningtemplatesummary";
export declare class ListProvisioningTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templates?: ProvisioningTemplateSummary[];
}
