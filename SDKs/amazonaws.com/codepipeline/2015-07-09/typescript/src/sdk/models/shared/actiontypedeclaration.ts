import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeExecutor } from "./actiontypeexecutor";
import { ActionTypeIdentifier } from "./actiontypeidentifier";
import { ActionTypeArtifactDetails } from "./actiontypeartifactdetails";
import { ActionTypePermissions } from "./actiontypepermissions";
import { ActionTypeUrls } from "./actiontypeurls";



// ActionTypeDeclaration
/** 
 * The parameters for the action type definition that are provided when the action type is created or updated.
**/
export class ActionTypeDeclaration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=executor" })
  executor: ActionTypeExecutor;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: ActionTypeIdentifier;

  @SpeakeasyMetadata({ data: "json, name=inputArtifactDetails" })
  inputArtifactDetails: ActionTypeArtifactDetails;

  @SpeakeasyMetadata({ data: "json, name=outputArtifactDetails" })
  outputArtifactDetails: ActionTypeArtifactDetails;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: ActionTypePermissions;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: ActionTypeUrls;
}
