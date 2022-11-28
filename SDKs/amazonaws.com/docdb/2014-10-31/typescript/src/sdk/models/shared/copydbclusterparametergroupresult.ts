import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroup } from "./dbclusterparametergroup";



export class CopyDbClusterParameterGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterParameterGroup?: DbClusterParameterGroup;
}
