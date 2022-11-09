import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsAttributeValue } from "./updatesystemmodelsattributevalue";


export class UpdateSystemModelsCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Values", elemType: shared.UpdateSystemModelsAttributeValue })
  values?: UpdateSystemModelsAttributeValue[];

  @Metadata({ data: "json, name=category" })
  category: string;
}
