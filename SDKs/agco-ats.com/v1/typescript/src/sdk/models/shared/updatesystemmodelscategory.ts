import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsAttributeValue } from "./updatesystemmodelsattributevalue";



export class UpdateSystemModelsCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Values", elemType: UpdateSystemModelsAttributeValue })
  values?: UpdateSystemModelsAttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category: string;
}
