import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OpsCenterIntegration } from "./opscenterintegration";
/**
 *  Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager.
**/
export declare class ServiceIntegrationConfig extends SpeakeasyBase {
    opsCenter?: OpsCenterIntegration;
}
