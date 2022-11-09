import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LastActiveDefinition } from "./lastactivedefinition";
import { BlueprintStatusEnum } from "./blueprintstatusenum";


// Blueprint
/** 
 * The details of a blueprint.
**/
export class Blueprint extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintLocation" })
  blueprintLocation?: string;

  @Metadata({ data: "json, name=BlueprintServiceLocation" })
  blueprintServiceLocation?: string;

  @Metadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=LastActiveDefinition" })
  lastActiveDefinition?: LastActiveDefinition;

  @Metadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ParameterSpec" })
  parameterSpec?: string;

  @Metadata({ data: "json, name=Status" })
  status?: BlueprintStatusEnum;
}
