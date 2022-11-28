import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationCollectionFilter } from "./cloudformationcollectionfilter";



// ResourceCollectionFilter
/** 
 *  Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. 
**/
export class ResourceCollectionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudFormation" })
  cloudFormation?: CloudFormationCollectionFilter;
}
