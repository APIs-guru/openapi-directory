import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroup } from "./dbclusterparametergroup";



export class CreateDbClusterParameterGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterParameterGroup?: DbClusterParameterGroup;
}
