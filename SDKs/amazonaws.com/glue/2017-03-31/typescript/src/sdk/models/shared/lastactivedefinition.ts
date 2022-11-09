import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LastActiveDefinition
/** 
 * When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
**/
export class LastActiveDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintLocation" })
  blueprintLocation?: string;

  @Metadata({ data: "json, name=BlueprintServiceLocation" })
  blueprintServiceLocation?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=ParameterSpec" })
  parameterSpec?: string;
}
