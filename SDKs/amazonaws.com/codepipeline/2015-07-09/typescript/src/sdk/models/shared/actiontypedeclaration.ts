import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeExecutor } from "./actiontypeexecutor";
import { ActionTypeIdentifier } from "./actiontypeidentifier";
import { ActionTypeArtifactDetails } from "./actiontypeartifactdetails";
import { ActionTypeArtifactDetails } from "./actiontypeartifactdetails";
import { ActionTypePermissions } from "./actiontypepermissions";
import { ActionTypeUrls } from "./actiontypeurls";


// ActionTypeDeclaration
/** 
 * The parameters for the action type definition that are provided when the action type is created or updated.
**/
export class ActionTypeDeclaration extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=executor" })
  executor: ActionTypeExecutor;

  @Metadata({ data: "json, name=id" })
  id: ActionTypeIdentifier;

  @Metadata({ data: "json, name=inputArtifactDetails" })
  inputArtifactDetails: ActionTypeArtifactDetails;

  @Metadata({ data: "json, name=outputArtifactDetails" })
  outputArtifactDetails: ActionTypeArtifactDetails;

  @Metadata({ data: "json, name=permissions" })
  permissions?: ActionTypePermissions;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=urls" })
  urls?: ActionTypeUrls;
}
