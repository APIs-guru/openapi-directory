import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastActiveDefinition } from "./lastactivedefinition";
import { BlueprintStatusEnum } from "./blueprintstatusenum";



// Blueprint
/** 
 * The details of a blueprint.
**/
export class Blueprint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintLocation" })
  blueprintLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=BlueprintServiceLocation" })
  blueprintServiceLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastActiveDefinition" })
  lastActiveDefinition?: LastActiveDefinition;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterSpec" })
  parameterSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: BlueprintStatusEnum;
}
