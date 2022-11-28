import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LastActiveDefinition
/** 
 * When there are multiple versions of a blueprint and the latest version has some errors, this attribute indicates the last successful blueprint definition that is available with the service.
**/
export class LastActiveDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintLocation" })
  blueprintLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=BlueprintServiceLocation" })
  blueprintServiceLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ParameterSpec" })
  parameterSpec?: string;
}
