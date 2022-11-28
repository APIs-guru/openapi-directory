import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorConfiguration } from "./operatorconfiguration";
export declare class WebBackendOperationCreateOrUpdate extends SpeakeasyBase {
    name: string;
    operationId?: string;
    operatorConfiguration: OperatorConfiguration;
    workspaceId: string;
}
