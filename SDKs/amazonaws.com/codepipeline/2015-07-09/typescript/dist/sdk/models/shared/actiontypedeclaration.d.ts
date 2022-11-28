import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeExecutor } from "./actiontypeexecutor";
import { ActionTypeIdentifier } from "./actiontypeidentifier";
import { ActionTypeArtifactDetails } from "./actiontypeartifactdetails";
import { ActionTypePermissions } from "./actiontypepermissions";
import { ActionTypeUrls } from "./actiontypeurls";
/**
 * The parameters for the action type definition that are provided when the action type is created or updated.
**/
export declare class ActionTypeDeclaration extends SpeakeasyBase {
    description?: string;
    executor: ActionTypeExecutor;
    id: ActionTypeIdentifier;
    inputArtifactDetails: ActionTypeArtifactDetails;
    outputArtifactDetails: ActionTypeArtifactDetails;
    permissions?: ActionTypePermissions;
    properties?: any;
    urls?: ActionTypeUrls;
}
