import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudFormationCollectionFilter } from "./cloudformationcollectionfilter";


// ResourceCollectionFilter
/** 
 *  Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. 
**/
export class ResourceCollectionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudFormation" })
  cloudFormation?: CloudFormationCollectionFilter;
}
